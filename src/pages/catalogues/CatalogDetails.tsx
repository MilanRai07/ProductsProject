import React, { Dispatch, SetStateAction } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // @ts-ignore
// import 'swiper/css';
// // @ts-ignore
// import 'swiper/css/free-mode';
// import { FreeMode } from 'swiper/modules';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import { motion } from 'framer-motion';

type props = {
    title: string,
    images: string | undefined
    setShowDetail: Dispatch<SetStateAction<boolean>>
}

const CatalogDetails: React.FC<props> = ({ title, images, setShowDetail }) => {

    return (
        <motion.section className="w-full h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className='flex justify-between items-center mb-10 '>
                <h1 className='Loading'>Watch Catalogue</h1>
                <div onClick={() => setShowDetail(false)}>
                    <Cross className="w-[50px] h-[50px] md:w-[40px] m-d:h-[40px] stroke-white cursor-pointer" />
                </div>
            </div>

            {
                images ? (
                    <div className="relative w-full" style={{ paddingBottom: "80.25%" /* 16:9 Aspect Ratio */ }}>
                        <iframe
                            src={`https://docs.google.com/gview?url=${encodeURIComponent(images)}&embedded=true`}
                            width="100%"
                            height="100%"
                            style={{
                                border: "none",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        >
                        </iframe>
                    </div>
                ) :
                    <div className='w-full Loading'>
                        No Pdf available
                    </div>
            }

        </motion.section >
    )
}
export default CatalogDetails