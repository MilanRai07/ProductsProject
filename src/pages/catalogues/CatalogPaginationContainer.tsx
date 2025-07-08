import ReactPaginate from "react-paginate";
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import { motion } from "framer-motion";
import { Catalog, CatalogApiResponseType, CatalogItem } from "../../types/catalog/CatalogApiResponseType";
import CatalogueCard from "../../components/cards/CatalogueCard";
import { Dispatch, SetStateAction } from "react";

type Props = {
    assetsArray?: CatalogApiResponseType;
    onPageChange: (newPage: number) => void;
    isFetching: boolean;
    isError: boolean;
    goTop: () => void
    setShowDetail: Dispatch<SetStateAction<boolean>>
    setCatalogImages: Dispatch<SetStateAction<string | undefined>>
    setCatalogTitle: Dispatch<SetStateAction<string>>
};

const CatalogPaginationContainer: React.FC<Props> = ({ assetsArray, onPageChange, isFetching, isError, goTop, setCatalogImages, setCatalogTitle, setShowDetail }) => {

    const pagination = assetsArray?.pagination ?? { totalPages: 1, currentPage: 1, limit: 8 };
    const items = assetsArray?.items ?? [];
    const { totalPages, currentPage } = pagination;
    const currentPageData = items // Get the data for the current page

    const cardClick = (title: string, featured_image: string, catalogs: Catalog[]) => {
        setShowDetail(true)
        setCatalogTitle(title)
        // let parsedImages: string[] = [];
        // if (typeof catalogs === "string") {
        //     parsedImages = JSON.parse(catalogs);
        // } else if (Array.isArray(catalogs)) {
        //     parsedImages = catalogs;
        // }
        const firstImageUrl = catalogs[0].image_url;
        setCatalogImages(firstImageUrl)
    }
    if (isError) {
        <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
            Something went wrong. Try again later...
        </div>
    }
    return (
        <section
            className="w-full h-auto Flex-Col justify-between items-center">
            {isFetching ? (
                <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                    Catalogues are loading. Please Wait...
                </div>
            ) :
                assetsArray?.items.length == 0 ? (
                    <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                        No Data Available At The Moment.
                    </div>
                ) :
                    assetsArray == undefined ? (
                        <div className="h-[500px] flex justify-center items-center text-[#FFFFFFB2]/70 Loading">
                            No Data Available At The Moment.
                        </div>
                    ) :
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-wrap justify-center gl6:grid-cols-2 grid-rows-auto gap-4
                          p-4 gl6:h-auto w-full " >
                                {currentPageData?.map((catalog: CatalogItem) => {
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
                                    className="w-[43px]  md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] h-[43px] bg-[#404040] hover:bg-Golden transition rounded-full relative cursor-pointer"
                                    onClick={() => {
                                        onPageChange(currentPage - 1)
                                        goTop()
                                    }
                                    }
                                    disabled={currentPage === 1}

                                >
                                    <Triangle className="w-[15px] md:w-[13px] h-[17px]  absolute top-1/2 -translate-y-1/2 left-[27%]" />
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
                                        containerClassName={'flex h-[50px] md:h-[38px] items-center gap-3 bg-[#404040] rounded-[30px] font-extrabold text-[15px] leading-[40px] tracking-4% transition'}
                                        pageClassName={'w-[30px] h-[30px] md:h-[26px] flex justify-center items-center rounded-full transition-all duration-300 ease-in-out'}
                                        activeClassName={'bg-Golden'}
                                        forcePage={currentPage - 1}
                                    />
                                )}

                                <button
                                    className="w-[43px] md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] h-[43px] bg-[#404040] hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                                    onClick={() => {
                                        goTop()
                                        onPageChange(currentPage + 1)
                                    }}
                                    disabled={currentPage === totalPages}
                                >
                                    <Triangle className="w-[15px] md:w-[13px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                                </button>
                            </div>
                        </motion.div>
            }
        </section>
    );
};

export default CatalogPaginationContainer;
