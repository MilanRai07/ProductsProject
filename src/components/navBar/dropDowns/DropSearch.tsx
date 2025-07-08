import { ReactComponent as Cross } from '../../../assets/svg/cross.svg';
import { ReactComponent as Search } from '../../../assets/svg/search.svg';
import { ReactComponent as Down } from '../../../assets/svg/chevronLeft.svg';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import SearchNavCard from '../../cards/SearchNavCard';
import { AnimatePresence, motion } from 'framer-motion';
import { useGetProductsByParamQuery } from '../../../services/ProductApi';
import { ProductTypes } from '../../../types/product/ApiResponseTypes';
import { Link } from 'react-router-dom';
import useSmoothScrollTop from '../../../customHook/useSmoothScrollTop';
import ReactPaginate from 'react-paginate';
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg';

type props = {
    setShowSearchBox: Dispatch<SetStateAction<boolean>>
}
const DropSearch: React.FC<props> = ({ setShowSearchBox }) => {
    const [param, setParam] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [showDrop, setShowDrop] = useState<boolean>(false);
    const [forExit, setForExit] = useState<boolean>(true);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [selectedSort, setSelectedSort] = useState('asc');
    const paginationRef = useRef(null);

    let limit = 8;
    const { data, isFetching } = useGetProductsByParamQuery({ param, currentPage, limit, sortOrder: selectedSort }, { skip: param == '' })
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 8 };
    let items = data?.items ?? [];
    let { totalPages } = pagination;

    const pressX = () => {
        setForExit(false)
        setParam('')
        setTimeout(() => {
            setShowSearchBox(false);
        }, 600);
    }
    const handleSearchRef = () => {
        if (searchInputRef.current) {
            setParam(searchInputRef.current.value)
        }
    }

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
            if (paginationRef.current) {
                ScrollTop(paginationRef.current);
            }
        }, 100);
    }

    return (
        <AnimatePresence>
            {
                forExit && (
                    <motion.div className="h-auto w-full backdrop-blur-sm bg-[#161717]/95 p-[70px] m-d:p-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                    >
                        {/* search input and cross here */}
                        <div className='w-full flex justify-between gap-5 items-center '>
                            <div className='relative w-full h-full'>
                                <input type="text"
                                    ref={searchInputRef}
                                    placeholder='Search...'
                                    className=" z-0 font-medium text-[#FFFFFF99] text-[13px] m-d:text-xs leading-[19px] tracking-[0.05em] w-full border-b-2 outline-none border-b-white bg-transparent text-white pb-1"
                                />
                                <Search className='absolute w-[20px] h-[20px] m-d:w-[15px] m-d:h-[15px] cursor-pointer right-[1%] -top-1 m-d:top-2 z-10 '
                                    onClick={handleSearchRef}
                                />
                            </div>
                            <Cross className='w-[50px] h-[50px] m-d:w-[38px] m-d:h-[38px] cursor-pointer -right-24 -top-4 z-10 stroke-white '
                                onClick={pressX}
                            />
                        </div>

                        {/* sort by and div here */}
                        <div className='w-full mt-20'
                            ref={paginationRef}
                        >
                            <div className='flex justify-between items-baseline w-full'>
                                {
                                    data?.items && (
                                        <>
                                            <p className='font-extrabold m-d:font-bold text-base m-d:text-sm text-white/70'>{`${items.length} search results for "${param}" `}</p>

                                            <div className='w-[118px] h-[36px] m-d:h-[29px] bg-white relative'>
                                                <div
                                                    onClick={() => setShowDrop(true)}
                                                    className='w-full h-full absolute z-0 text-black flex items-center justify-between px-2 cursor-pointer'>
                                                    <p className='font-semibold text-base m-d:font-bold m-d:text-sm'>Sort by</p>
                                                    <Down className='w-[24px] h-[20px] rotate-[270deg] m-d:w-[20px] m-d:h-[16px]' />
                                                </div>
                                                <AnimatePresence>
                                                    {
                                                        showDrop && (
                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0 }}
                                                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                                className='absolute z-10 -left-5 -top-5 w-[163px] h-[80px] m-d:w-[150px] sm-d:w-[120px] m-d:h-[70px]  rounded-[5px] bg-[#404040FA] Flex-Col justify-between p-4'>
                                                                {/* <p className={`Drop-Search-List ${selectedSort == '' ? 'text-[#FFFFFF80]' : ''} `}
                                                                    onClick={() => {
                                                                        setShowDrop(false)
                                                                        setSelectedSort('')
                                                                        setCurrentPage(1);
                                                                    }
                                                                    }
                                                                >Random</p> */}
                                                                <p className={`Drop-Search-List  ${selectedSort == 'asc' ? 'text-[#FFFFFF80]' : ''} `}
                                                                    onClick={() => {
                                                                        setShowDrop(false)
                                                                        setSelectedSort('asc')
                                                                        setCurrentPage(1);

                                                                    }
                                                                    }
                                                                >Newest</p>
                                                                <p className={`Drop-Search-List  ${selectedSort == 'desc' ? 'text-[#FFFFFF80]' : ''}  `}
                                                                    onClick={() => {
                                                                        setShowDrop(false)
                                                                        setSelectedSort('desc')
                                                                        setCurrentPage(1);

                                                                    }
                                                                    }
                                                                >Oldest</p>
                                                                {/* <p className={`Drop-Search-List  ${selectedSort == 'latest' ? 'text-[#FFFFFF80]' : ''} `}
                                                                    onClick={() => {
                                                                        setShowDrop(false)
                                                                        setSelectedSort('latest')
                                                                        setCurrentPage(1);
                                                                    }
                                                                    }
                                                                >Newest</p> */}
                                                            </motion.div>
                                                        )
                                                    }
                                                </AnimatePresence>
                                            </div>
                                        </>

                                    )
                                }

                            </div>
                        </div>

                        {/* searched items here */}
                        <div>

                            {param == '' ?
                                (
                                    <div className="h-[100px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">

                                    </div>
                                ) : isFetching ? (
                                    <div className="h-[100px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                                        Assets are loading. Please Wait...
                                    </div>
                                ) :
                                    items.length == 0 ? (
                                        <div className="h-[100px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                                            No Data Available At The Moment. Try Another Search....
                                        </div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6 }}
                                            className="relative h-full w-full"
                                        >

                                            <div

                                                className='flex justify-center flex-wrap gap-7 m-d:gap-4 mt-20'>
                                                {
                                                    // [...Array(7)].map((_,) => {
                                                    //     return (
                                                    //         <SearchNavCard />
                                                    //     )
                                                    // })
                                                    items.map((assets: ProductTypes) => {
                                                        const { id, featured_image, title, slugs } = assets;
                                                        return (
                                                            <Link key={id}
                                                                onClick={pressX}
                                                                to={`/assets-singlepage/${slugs}`}

                                                            >
                                                                <SearchNavCard
                                                                    image={featured_image}
                                                                    title={title}
                                                                />
                                                            </Link>
                                                        )
                                                    })
                                                }
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


                        </div>

                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
export default DropSearch;


