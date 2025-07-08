import { useState } from "react";
import OurValuesCard from "../../../components/cards/OurValuesCard";
import { OurValuesItem } from "../../../localData/company/OurValuesItems";
import { motion } from "framer-motion";
import useIsDesktop from "../../../customHook/useIsDesktop";

const Missions: React.FC = () => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const isDesktop = useIsDesktop();

    return (
        <section className="bg-[#404040] h-[788px] sm:h-auto p-[75px] md:px-9 flex items-center 3xl:flex-col justify-between"
            onMouseEnter={() => {
                if (isDesktop) setIsHover(true);
            }}
            onMouseLeave={() => {
                if (isDesktop) setIsHover(false);
            }}
        >
            <motion.div className="w-[457px] 3xl:text-center 3xl:w-[600px] sm:!w-[400px] xs:!w-[330px]"
                initial={{ opacity: isDesktop ? 0 : 1 }}
                animate={isHover ? { opacity: 1 } : { opacity: isDesktop ? 0 : 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <h1 className=" font-bold text-[30px] l-g:text-[27px] sl2:text-2xl xs:!text-xl leading-[45px] tracking-4% ">Our Mission And Vision</h1>
                <p className=" font-normal text-sm l-g:text-[13px] sm:!text-[12px] xs:!text-[10px] xs:leading-[18px] sm:leading-[24px] l-g:leading-[25px] l-g:mt-2 leading-[33px] tracking-4%">At STL, our mission is to design beautiful, functional, and inspiring interiors that
                    enhance the way people live and work. We are committed to delivering high-quality, innovative,
                    and personalized design solutions that reflect our clients' unique styles and needs.
                </p>
            </motion.div>
            <motion.div className="grid grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-1 sm:w-full sm:mt-10"
                initial={{ opacity: isDesktop ? 0 : 1 }}
                animate={isHover ? { opacity: 1 } : { opacity: isDesktop ? 0 : 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                {
                    OurValuesItem.map((item, index) => {
                        const { img, title, text } = item;
                        return (
                            <div key={index}>
                                <OurValuesCard
                                    index={index}
                                    img={img}
                                    title={title}
                                    text={text}
                                />
                            </div>
                        )
                    })
                }
            </motion.div>
        </section>
    )
}
export default Missions;