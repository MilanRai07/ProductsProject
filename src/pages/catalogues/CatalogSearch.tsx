import { motion } from "framer-motion";
import { ReactComponent as Cross } from '../../assets/svg/cross.svg'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import ReactPaginate from 'react-paginate';
import { useGetCatalogByParamQuery } from "../../services/Catalog";
import { Catalog, CatalogItem } from "../../types/catalog/CatalogApiResponseType";
import CatalogueCard from "../../components/cards/CatalogueCard";

type props = {
    searchParam: string
    setSearchParam: Dispatch<SetStateAction<string>>;
    goTop: () => void
    setShowDetail: Dispatch<SetStateAction<boolean>>
    setCatalogImages: Dispatch<SetStateAction<string | undefined>>
    setCatalogTitle: Dispatch<SetStateAction<string>>

}

const CatalogSearch: React.FC<props> = ({ setSearchParam, searchParam, goTop, setCatalogImages, setCatalogTitle, setShowDetail }) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 8;
    const param = searchParam;

    const { data, isFetching } = useGetCatalogByParamQuery({ param, currentPage, limit });
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


    const cardClick = (title: string, featured_image: string, catalogs: Catalog[]) => {
        setShowDetail(true)
        setCatalogTitle(title)
        // let parsedImages: string[] = [];
        // if (typeof catalogs === "string") {
        //     parsedImages = JSON.parse(catalogs);
        // } else if (Array.isArray(catalogs)) {
        //     parsedImages = catalogs;
        // }
        // setCatalogImages(parsedImages.length > 0 ? [featured_image, ...parsedImages] : [featured_image])
        const firstImageUrl = catalogs[0].image_url;
        setCatalogImages(firstImageUrl)
    }

    return (
        <section
            className="w-full h-auto Flex-Col justify-between items-center">

            {isFetching ? (
                <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                    Catalogues are loading. Please Wait...
                </div>
            ) :
                items.length == 0 ? (
                    <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                        No Data Available At The Moment. Try Another Search....
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
                            <Cross className="w-[50px] h-[50px]  md:w-[40px] m-d:h-[40px] stroke-white cursor-pointer" />
                        </div>
                        <p className="text-[#FFFFFFB2]/70 text-base absolute left-0 sm:text-xs sm-d:-top-14 -top-7">
                            {
                                items.length == 0 ? '' : `Your search results for " ${searchParam} " has ${items.length} items.`
                            }
                        </p>
                        <div className="flex flex-wrap justify-center gl6:grid-cols-2 grid-rows-auto gap-4
                      p-4 gl6:h-auto w-full " >
                            {items.map((catalog: CatalogItem) => {

                                const { id, featured_image, title, catalogs } = catalog;
                                return (
                                    <div key={id}
                                        onClick={() => cardClick(title, featured_image, catalogs)}
                                    >
                                        <CatalogueCard image={featured_image} title={title} />
                                    </div>

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
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={2}
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

        </section >
    )
}
export default CatalogSearch;

