import InteriorDesigner from "../../components/container/designs-container/InteriorDesigner"
import HeroCollections from "../../components/heroComponent/HeroCollections"
// import ExploreSlider from "../../components/slider/ExploreSlider"
// import exBg from '../../assets/images/explore/exploreSpaces.jpg';
import { useGetDesignerQuery } from "../../services/DesignerApi"
import { lazy, Suspense } from "react";
const GalleryIndex = lazy(() => import('../../components/collections/gallery/GalleryIndex'))

const CollectionIndex: React.FC = () => {
    let currentPage = 1;
    let limit = 10;
    const { data } = useGetDesignerQuery({ currentPage, limit });
    const totalCount = data?.pagination?.totalCount ?? 0;
    console.log(data?.items);

    return (
        <main className="bg-white">
            <HeroCollections />
            <h1 className="text-black mt-[75px] px-[75px] md:text-center font-bold text-[22px] md:text-[20px] sm:text-[18px] tracking-[0.05em]">Explore Top Interior Designers & Their Unique Designs</h1>
            <section className=" py-[70px] d1:py-0 pl-[75px]">

                {/* Designer Section */}
                {
                    totalCount > 0 ? (
                        <section className="py-[30px] pl-[75px] d1:pl-0 d1:px-[50px]">
                            {data?.items.map((designer) => (
                                <div key={designer.id} className="mt-36">
                                    <InteriorDesigner designer={designer} />
                                </div>
                            ))}
                        </section>
                    ) : (
                        <p className="text-center text-black Loading">No designers available</p>
                    )}
            </section>
            {/* <section className="px-[75px] py-[50px] text-black h-auto w-full"
                style={{
                    background: `url(${exBg})`,
                    backgroundSize: 'cover'
                }}
            >
                <h2 className="font-bold text-[22px] md:text-center md:text-[20px] sm:text-[18px] leading-[33px] tracking-2% ">Explore Spaces </h2>
                <div className="mt-10">
                    <ExploreSlider />
                </div>
            </section> */}

            {/* image collection from heres */}
            <section className="p-[75px]">
                <h2 className="font-bold text-[22px] text-black md:text-center md:text-[20px] sm:text-[18px] leading-[33px] tracking-2% ">Glimpse of our collection</h2>
                <Suspense>
                    <GalleryIndex />
                </Suspense>
            </section>
        </main>
    )
}
export default CollectionIndex