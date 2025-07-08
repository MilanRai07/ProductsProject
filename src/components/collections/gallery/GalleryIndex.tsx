import { useGetGalleryQuery } from "../../../services/GalleryApi";
import GallerySmallImage from "../../gallery/GallerySmallImage";
import GalleryBigImage from "../../gallery/GalleryBigImage";

const GalleryIndex: React.FC = () => {
    let currentPage = 1
    let limit = 9;
    const { data, isFetching, isError } = useGetGalleryQuery({ currentPage, limit })
    console.log(data);
    const ImagesData = data?.items ?? []

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
            <div className="flex justify-center w-full mt-10"
            >
                <div className="w-full">
                    {ImagesData && ImagesData.length > 0 ? (
                        <>
                            <div className="bg-white mb-10 w-full flex sl2:flex-wrap justify-between gap-4 m-d:gap-2 sl2:min-[300px] font-semibold text-[20px] leading-[30px] tracking-2%">
                                {/* Left Section */}
                                <div className="w-96 xl:w-64 m-d:w-44 sl2:w-full h-[460px] xl:h-[300px] 2xs:h-[560px] flex flex-col gap-4 md:gap-2">
                                    <GallerySmallImage img={ImagesData[0]?.image_url ?? ''} />
                                    <GallerySmallImage img={ImagesData[1]?.image_url ?? ''} />
                                    <GallerySmallImage img={ImagesData[2]?.image_url ?? ''} />
                                </div>


                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] xl:h-[300px]">
                                    <GalleryBigImage img={ImagesData[3]?.image_url ?? ''} />
                                </div>
                            </div>

                            <div className="bg-white mb-10 w-full flex sl2:flex-wrap justify-between gap-4 md:gap-2 font-semibold text-[20px] leading-[30px] tracking-2%">
                                {/* Left Section */}
                                <div className="w-[484px] xl:w-64 m-d:w-44 sl2:w-full grid grid-cols-2 2xs:grid-cols-1 2xs:h-[560px] gap-4 md:gap-2 h-[460px] xl:h-[300px]">
                                    <GallerySmallImage img={ImagesData[4]?.image_url ?? ''} />
                                    <GallerySmallImage img={ImagesData[5]?.image_url ?? ''} />
                                    <GallerySmallImage img={ImagesData[6]?.image_url ?? ''} />
                                    <GallerySmallImage img={ImagesData[7]?.image_url ?? ''} />
                                </div>

                                {/* Right Section (Main Image) */}
                                <div className="relative rounded-lg flex-grow overflow-hidden group h-[460px] xl:h-[300px]">
                                    <GalleryBigImage img={ImagesData[8]?.image_url ?? ''} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="Loading">Couldn't provide gallery at the moment...</div>
                    )}
                </div>
            </div>
        </>
    )
}
export default GalleryIndex;