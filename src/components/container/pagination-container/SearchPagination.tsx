import { motion } from "framer-motion";
import { ProductTypes } from "../../../types/product/ApiResponseTypes";
import { Link } from "react-router";
import AssetsCard from "../../../components/cards/AssetsCard";
import { ReactComponent as Cross } from '../../../assets/svg/cross.svg'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useGetProductsByParamQuery } from "../../../services/ProductApi";
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg';
import ReactPaginate from 'react-paginate';
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";

type props = {
    searchParam: string
    setSearchParam: Dispatch<SetStateAction<string>>
}

const SearchPaginate: React.FC<props> = ({ setSearchParam, searchParam }) => {

    const PaginationRef = useRef(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 100;
    const param = searchParam;

    const { data, isFetching } = useGetProductsByParamQuery({ param, currentPage, limit });
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 8 };
    let items = data?.items ?? [];
    let { totalPages } = pagination;

    useEffect(() => {
        items = []
    }, [searchParam])

    // Function to handle page change
    const onPageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };


    //scroll top
    const ScrollTop = useSmoothScrollTop();

    const goTop = () => {
        setTimeout(() => {
            if (PaginationRef.current) {
                ScrollTop(PaginationRef.current);
            }
        }, 100);
    }
    return (
        <section ref={PaginationRef}
            className="w-full h-auto Flex-Col justify-between items-center">
            {isFetching ? (
                <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                    Assets are loading. Please Wait...
                </div>
            ) :
                items.length == 0 ? (
                    <div className=" w-full h-[500px] sm:h-[300px] relative flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                        <p className="Loading">No Data Available At The Moment. Try Another Search....</p>
                        <div className="absolute -top-10 right-0"
                            onClick={() => setSearchParam('')}
                        >
                            <Cross className="w-[50px]  md:w-[40px] m-d:h-[40px] h-[50px] stroke-white cursor-pointer" />
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-full w-full"
                    >
                        <div className="absolute -top-10 right-0"
                            onClick={() => setSearchParam('')}
                        >
                            <Cross className="w-[50px]  md:w-[40px] m-d:h-[40px] h-[50px] stroke-white cursor-pointer" />
                        </div>
                        <p className="text-[#FFFFFFB2]/70 text-base absolute left-0 sm:text-xs sm-d:-top-14 -top-7">
                            {`Your search results for " ${searchParam} " has ${items.length} items.`}
                        </p>


                        <div className="flex flex-wrap justify-center gl6:grid-cols-2 grid-rows-auto gap-4
                      p-4 gl6:h-auto w-full " >
                            {items.map((asset: ProductTypes) => {
                                const { id, featured_image, title, slugs } = asset;
                                return (
                                    <Link key={id} to={`/assets-singlepage/${slugs}`}>
                                        <AssetsCard image={featured_image} title={title} />
                                    </Link>
                                );
                            })}

                        </div>

                        <div className="flex items-center justify-center gap-3 h-[43px] mt-16">
                            <button
                                className="w-[43px] h-[43px] md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] bg-[#404040] hover:bg-Golden transition rounded-full relative cursor-pointer"
                                onClick={() => {
                                    onPageChange(currentPage - 1)
                                    goTop()
                                }
                                }
                                disabled={currentPage === 1}

                            >
                                <Triangle className=" w-[15px] md:w-[13px] h-[17px]  absolute top-1/2 -translate-y-1/2 left-[27%]" />
                            </button>

                            {totalPages > 1 && (
                                <ReactPaginate
                                    previousLabel={null}
                                    nextLabel={null}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={totalPages}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={1}
                                    onPageChange={(event) => {
                                        onPageChange(event.selected + 1)
                                        goTop()
                                    }}
                                    containerClassName={'flex h-[50px] items-center gap-3 bg-[#404040] rounded-[30px] font-extrabold text-[15px] leading-[40px] tracking-4% transition'}
                                    pageClassName={'w-[30px] h-[30px] flex justify-center items-center rounded-full transition-all duration-300 ease-in-out'}
                                    activeClassName={'bg-Golden'}
                                    forcePage={currentPage - 1}
                                />
                            )}

                            <button
                                className="w-[43px] h-[43px] md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] bg-[#404040] hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                                onClick={() => {
                                    goTop()
                                    onPageChange(currentPage + 1)
                                }}
                                disabled={currentPage === totalPages}
                            >
                                <Triangle className="w-[15px] md:w-[13px] h-[17px]  absolute top-1/2 -translate-y-1/2 left-[27%]" />
                            </button>
                        </div>
                    </motion.div>
                )
            }
        </section>
    )
}
export default SearchPaginate;

{/* <div className="h-auto mt-24 absolute z-10 w-full left-1/2 -translate-x-1/2 px-[55px]">

<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className='h-full relative'

>
    <div className="absolute right-0 top-0 cursor-pointer">
        <Cross className="w-[50px] h-[50px]" onClick={() => setSearchParam('')} />
    </div>
    {
        isFetching ? (
            <div className="h-[200px] flex justify-center items-center text-[#FFFFFFB2]/70 text-lg">
                Assets are loading. Please Wait...
            </div>
        ) : items.length === 0 ? (
            <div className="h-[200px] flex justify-center items-center text-[#FFFFFFB2]/70 text-lg">
                No Data Available At The Moment. Try Another Search...
            </div>
        ) :

            (
                <>
                    <p className="text-[#FFFFFFB2]/70 text-base absolute left-0 top-8">
                        {`Your search results for " ${searchParam} "`}
                    </p>


                    <div className="
                flex items-center justify-center gap-3 h-[43px] absolute left-1/2 -translate-x-1/2 top-8">
                        <button
                            className="w-[43px] h-[43px] bg-[#404040] hover:bg-Golden transition rounded-full relative cursor-pointer"
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <Triangle className="absolute top-1/2 -translate-y-1/2 left-[27%]" />
                        </button>

                        {totalPages > 1 && (
                            <ReactPaginate
                                previousLabel={null}
                                nextLabel={null}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                onPageChange={(event) => onPageChange(event.selected + 1)}
                                containerClassName={'flex h-[50px] items-center gap-3 bg-[#404040] rounded-[30px] font-extrabold text-[15px] leading-[40px] tracking-4% transition'}
                                pageClassName={'w-[30px] h-[30px] flex justify-center items-center rounded-full transition-all duration-300 ease-in-out'}
                                activeClassName={'bg-Golden'}
                                forcePage={currentPage - 1}
                            />
                        )}

                        <button
                            className="w-[43px] h-[43px] bg-[#404040] hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <Triangle className="absolute top-1/2 -translate-y-1/2 left-[27%]" />
                        </button>
                    </div>


                    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-6 h-[600px] w-full absolute top-32">
                        {items.map((asset: ProductTypes) => {
                            const { id, featured_image, title, slugs } = asset;
                            return (
                                <Link key={id} to={`/assets-singlepage/${slugs}`}>
                                    <AssetsCard image={featured_image} title={title} />
                                </Link>
                            );
                        })}
                    </div>
                </>
            )
    }

</motion.div >
</div > */}