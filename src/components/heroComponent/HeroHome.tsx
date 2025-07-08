import { motion } from "framer-motion";
import { fadeVariants } from "../../utils/FadeVariants";
import { HeroConatainerItem } from "../../localData/home/HeroContainerItem";
import { NavLink } from "react-router-dom";
import { HeroHomeItemsType } from "../../types/heroContainer/HeroHomeitemsType";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import '../../style/component/heroSlider.css';

const HeroHome: React.FC = () => {
    return (
        <motion.section
            className="relative w-full h-[786px] md:h-[650px] sm:h-[600px] sm-d:h-[550px] 2xs:h-[500px]"
            variants={fadeVariants}
            initial='initial'
            animate='animate'
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,  // Ensure the pagination is clickable
                }}
                loop={true}
                className="mySwiper">
                {
                    HeroConatainerItem.map((item: HeroHomeItemsType, index) => {
                        const { img, title, detail, button, path } = item;
                        return (
                            <SwiperSlide key={index}>
                                <img src={img} alt="hero1" width='100%' className="absolute top-[5.5%] z-0 h-[743px] bg-cover" />
                                <div className="Absolute-Center top-[52%] z-20 text-center Horizontal-Divs-Center gap-11 md:gap-10 sm:gap-8 sm-d:gap-6 2xs:gap-4 ">
                                    <h1 className="font-bold text-[30px] x-l:text-2xl sm-d:text-xl xs:text-[17px] 2xs:text-[14px] leading-[30px] m-d:leading-[25px] sm-d:leading-[23px] tracking-7%">{title}</h1>
                                    <p className="w-[803px] xl:w-[750px] x-l:w-[600px] m-d:w-[550px] sm-d:w-[480px] xs:w-[430px] 2xs:w-[300px] font-normal text-[20px] x-l:text-lg sm-d:text-[15px] xs:text-[14px] 2xs:text-[12px] leading-[30px] m-d:leading-[25px] 2xs:leading-[20px] tracking-7%">
                                        {detail}
                                    </p>
                                    <NavLink to={path}>
                                        <button className="Golden-Btn w-[204px] x-l:w-[180px] sm-d:w-[150px] 2xs:w-[140px] h-[56px] x-l:h-12 sm-d:!h-10 2xs:!h-9 rounded-[15px] font-bold text-[22px] x-l:text-[20px] sm-d:text-[16px]
                                          2xs:text-[14px] leading-[30px] tracking-4% text-black font-serif">
                                            {button}
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </motion.section>
    )
}
export default HeroHome;