import React, { useEffect, useState } from "react";
import { ProductColorType } from "../../../types/product/ApiResponseTypes"
import AssetsImage from "./AssetsImage";
import { ReactComponent as Back } from '../../../assets/svg/blackBack.svg';
import { motion } from "framer-motion";
import './Assets.css';
import { useCleanText } from "../../../customHook/useCleanText";

type props = {
    title: string,
    content: string,
    description: string,
    specificationList: string
    featured_image: string,
    images: string[]
    productColors: ProductColorType[]
}

const AssetsDetail: React.FC<props> = ({ title, content, description, specificationList, featured_image, productColors, images }) => {
    const [allImage, setAllImage] = useState<string[]>([]);
    const [showColorImage, setShowColorImage] = useState<boolean>(false);
    const [colorImage, setColorImage] = useState<string | undefined>();

    useEffect(() => {
        try {
            let parsedImages: string[] = [];

            if (typeof images === "string") {
                parsedImages = JSON.parse(images);
            } else if (Array.isArray(images)) {
                parsedImages = images;
            }

            setAllImage(parsedImages.length > 0 ? [featured_image, ...parsedImages] : [featured_image]);
        } catch (error) {
            setAllImage([featured_image]); // Fallback in case of an error
        }
    }, [featured_image, images]);

    const seeColorImage = (colorName: string) => {
        let searchColor = productColors.find((item) => item.color.name == colorName)
        setColorImage(searchColor?.color_image)
        setShowColorImage(true)
    }


    return (
        <section className="flex gap-36 xl:gap-16 w-full l-g:Flex-Col m-d:gap-14">
            <div>

                <div className="w-[344px] xl:w-[280px] l-g:w-full l-g:h-[300px] xl:h-[280px] h-[344px] bg-[#40404080]">
                    {
                        showColorImage == true ? (
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                src={colorImage} alt='stl images' className="w-full h-full object-cover"></motion.img>
                        ) : (
                            <AssetsImage imageSlider={allImage} />
                        )
                    }
                </div>
                <div className='mt-10 xl:mt-8 m-d:mt-6'>
                    <p className='font-bold text-[25px] xl:text-[21px] m-d:text-[18px] m-d:leading-[25px] xl:leading-[30px] leading-[40px] tracking-4%'>Available Materials</p>
                    <div className='flex gap-4 xl:gap-2 mt-10 xl:mt-7 m-d:mt-5 items-center w-[344px] xl:w-[280px] n4:w-[200px] flex-wrap'>
                        {
                            showColorImage && (
                                <div onClick={() => setShowColorImage(false)} className="cursor-pointer">
                                    <Back className="w-[30px] h-[30px] m-d:w-[25px] m-d:h-[25px]" />
                                </div>
                            )
                        }
                        {
                            (productColors || []).map((items: ProductColorType, index: number) => (
                                <div key={index}
                                    className='w-[35px] h-[35px] xl:w-[28px] xl:h-[28px] sm:!w-[20px] sm:!h-[20px]  rounded-full cursor-pointer'
                                    style={{
                                        backgroundColor: `${items.color.hex_code}`
                                    }}
                                    onClick={() => seeColorImage(items.color.name)}
                                >
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='Flex-Col gap-10 xl:gap-6 m-d:gap-3 '>
                <div>
                    <h1 className='font-bold text-[25px] xl:text-[20px] m-d:text-[19px] sm:text-[16px] sm:leading-[10px] xl:leading-[30px] leading-[40px] tracking-4%'>
                        {useCleanText(title)}
                    </h1>
                    <p className='font-normal text-[15px] xl:text-[13px] xl:leading-[26px] leading-[30px] tracking-4% mt-5 xl:mt-3 m-d:mt-1'>
                        {useCleanText(description)}
                    </p>

                </div>
                <div className="sm:mt-5">
                    <h3 className='font-bold text-[22px] xl:text-[18px]  m-d:text-[16px]  xl:leading-[28px] leading-[40px] tracking-4%'>
                        Description
                    </h3>
                </div>
                <div
                    className="rich-text-content !bg-transparent w-full font-medium text-[15px] xl:text-[13px] xl:leading-[26px] leading-[30px] tracking-4% m-d:mt-2"
                    dangerouslySetInnerHTML={{ __html: useCleanText(content) }}
                ></div>
                <div>
                    <h3 className='font-bold text-[22px]  xl:text-[18px] m-d:text-[16px] xl:leading-[28px] leading-[40px] tracking-4%'>Specifications</h3>
                    <div dangerouslySetInnerHTML={{ __html: useCleanText(specificationList) }} className="rich-text-content w-full xl:text-[13px] xl:leading-[26px] mt-5 xl:mt-3 m-d:mt-1" />
                </div>
            </div>
        </section >
    )
}
export default AssetsDetail;