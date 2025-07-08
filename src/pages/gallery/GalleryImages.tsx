import { useRef, useState } from "react";
import GalleryBigImage from "../../components/gallery/GalleryBigImage";
import GallerySmallImage from "../../components/gallery/GallerySmallImage";
// import { DesignersItem } from "../../localData/designers/DesignersItems";
import { useGetGalleryQuery } from "../../services/GalleryApi";
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import ReactPaginate from "react-paginate";
import useSmoothScrollTop from "../../customHook/useSmoothScrollTop";
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';



const GalleryImages: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const PaginationRef = useRef(null);
    let limit = 9;
    const { data, isFetching, isError } = useGetGalleryQuery({ currentPage, limit })
    const ImagesData = data?.items ?? []
    const pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 8 }
    const { totalPages } = pagination;


    const ScrollTop = useSmoothScrollTop();
    const goTop = () => {
        setTimeout(() => {
            if (PaginationRef.current) {
                ScrollTop(PaginationRef.current);
            }
        }, 100);
    }
    if (isFetching) {
        return (
            <div className="flex justify-center w-full p-[75px] mt-10 Loading">
                Galley is loading. Please wait...
            </div>
        )
    }
    if (isError) {
        return (
            <div className="flex justify-center w-full p-[75px] mt-10 Loading">
                Something went wrong...
            </div>
        )
    }
    return (
        <>
            <div className="flex justify-center w-full p-[75px] mt-10"
                ref={PaginationRef}
            >
                <div className="w-full">
                    {ImagesData && ImagesData.length > 0 ? (
                        <>
                            <div className="bg-white mb-10 w-full flex sl2:flex-wrap justify-between gap-4 m-d:gap-2 sl2:min-[300px] font-semibold text-[20px] leading-[30px] tracking-2%">
                                {/* Left Section */}
                                <div className="w-96 xl:w-64 m-d:w-44 sl2:w-full h-[460px] xl:h-[300px] 2xs:h-[560px] flex flex-col gap-4 md:gap-2">

                                    <GallerySmallImage img={ImagesData[0]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[0]?.image_url ?? '')}
                                    />
                                    <GallerySmallImage img={ImagesData[1]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[1]?.image_url ?? '')}
                                    />
                                    <GallerySmallImage img={ImagesData[2]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[2]?.image_url ?? '')}
                                    />
                                </div>


                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] xl:h-[300px]">
                                    <div onClick={() => setSelectedImage(ImagesData[3]?.image_url ?? '')}>
                                        <GalleryBigImage img={ImagesData[3]?.image_url ?? ''}
                                            onClick={() => setSelectedImage(ImagesData[3]?.image_url ?? '')}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white mb-10 w-full flex sl2:flex-wrap justify-between gap-4 md:gap-2 font-semibold text-[20px] leading-[30px] tracking-2%">
                                {/* Left Section */}
                                <div className="w-[484px] xl:w-64 m-d:w-44 sl2:w-full grid grid-cols-2 2xs:grid-cols-1 2xs:h-[560px] gap-4 md:gap-2 h-[460px] xl:h-[300px]">
                                    <GallerySmallImage img={ImagesData[4]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[4]?.image_url ?? '')}
                                    />
                                    <GallerySmallImage img={ImagesData[5]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[5]?.image_url ?? '')}
                                    />
                                    <GallerySmallImage img={ImagesData[6]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[6]?.image_url ?? '')}
                                    />
                                    <GallerySmallImage img={ImagesData[7]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[7]?.image_url ?? '')}
                                    />
                                </div>

                                {/* Right Section (Main Image) */}
                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] xl:h-[300px]">
                                    <GalleryBigImage img={ImagesData[8]?.image_url ?? ''}
                                        onClick={() => setSelectedImage(ImagesData[8]?.image_url ?? '')}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="Loading">No data available at the moment...</div>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 h-[43px] p-10">
                <button
                    className="w-[43px]  md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] h-[43px] bg-[#404040] hover:bg-Golden transition rounded-full relative cursor-pointer"
                    onClick={() => {
                        setCurrentPage(currentPage - 1)
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
                            setCurrentPage(event.selected + 1)
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
                        setCurrentPage(currentPage + 1)
                    }}
                    disabled={currentPage === totalPages}
                >
                    <Triangle className="w-[15px] md:w-[13px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                </button>
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
                >
                    <button onClick={() => setSelectedImage(null)}>
                        <Cross className='m-d:w-[50px] m-d:h-[50px] w-[38px] h-[38px] cursor-pointer absolute left-3 top-1  z-10 stroke-white '

                        />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                </div>
            )}
        </>
    );
};

export default GalleryImages;
