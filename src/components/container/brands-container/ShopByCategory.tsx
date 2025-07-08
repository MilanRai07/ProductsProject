import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProductsByBrandApiResponse } from "../../../types/brand/BrandApiResponseType";
import { Link } from "react-router-dom";
import useIsDesktop from "../../../customHook/useIsDesktop";

type props = {
    data?: ProductsByBrandApiResponse
}

const ShopByCategory: React.FC<props> = ({ data }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const isDesktop = useIsDesktop();


    const handleToggle = () => {
        setShowMore(!showMore);
        if (showMore && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div ref={sectionRef} className="bg-white min-h-8 mt-20 "
            //  onMouseEnter={() => {
            //     if (isDesktop) setIsHover(true);
            // }}
            // onMouseLeave={() => {
            //     if (isDesktop) setIsHover(false);
            // }}
        >
            <div
                // initial={{ opacity: 0 }}
                // animate={{
                //     opacity: isHover ? 1 : 0
                // }}
                // transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                <h1 className='font-bold text-[25px] gl6:text-[23px] sm-d:!text-[20px] sm-d:text-center sm-d:leading-[40px] leading-[60px] tracking-[0.03em]'>Watch our latest products</h1>
                {
                    data?.items && data.items.length > 0 ? (
                        <>
                            <div
                                className="grid grid-cols-4 w-full justify-between gl6:grid-cols-3 sm-d:gap-3 1xs:!grid-cols-1 gap-4 mt-10"
                            >
                                {data?.items.slice(0, 4).map((item) => {
                                    const { id, featured_image, title, slugs } = item.product;
                                    return (
                                        <Link key={id} to={`/assets-singlepage/${slugs}`}>
                                            <div
                                                className={`h-[362px] 2xl:h-[300px] 2x-l:h-[280px] gl5:h-[230px] sm-d:!h-[180px] bg-slate-400
                                ${id === 0 ? '1xs:col-span-2' :
                                                        id === 1 ? '1xs:col-span-2' :
                                                            id === 2 ? '1xs:col-span-2' :
                                                                id === 3 ? '1xs:col-span-2' :
                                                                    'col-span-2 gl6:col-span-3 1xs:!col-span-2'
                                                    }`}
                                            >
                                                <img src={featured_image} alt={title} className="w-full h-full object-cover" />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {showMore && data.items.length > 4 && (
                                <div
                                    className="grid grid-cols-4 gl6:grid-cols-3 1xs:!grid-cols-1 1xs:!place-center grid-row-2 gap-4 mt-10"
                                   
                                >
                                    {data.items.slice(4, 8).map((item) => {
                                        const { id, featured_image, title, slugs } = item.product;
                                        return (
                                            <Link key={id} to={`/assets-singlepage/${slugs}`}>
                                                <div
                                                    className={`h-[362px] 2xl:h-[300px] 2x-l:h-[280px] gl5:h-[230px] sm-d:!h-[180px]
                                    ${id === 4 ? 'col-span-2' :
                                                            'col-span-2 gl6:col-span-3 1xs:!col-span-2'
                                                        }`}
                                                >
                                                    <img src={featured_image} alt={title} className="w-full h-full object-cover" />
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}

                            {
                                data.items.length > 6 && (
                                    <div className="flex justify-center mt-10" onClick={handleToggle}>
                                        <button className="Black-Square-Btn border border-black l-g:mx-auto gl3:w-[150px] sl1:!w-[120px] sl1:!h-[40px] hover:bg-black">
                                            {showMore ? 'Show Less' : 'Show More'}
                                        </button>
                                    </div>
                                )
                            }
                        </>
                    ) : (
                        <div className="Loading">
                            No data available at the moment...
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default ShopByCategory;
