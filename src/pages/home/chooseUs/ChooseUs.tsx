import { useState } from "react";
import { ChooseUsItem } from "../../../localData/home/ChooseUsItem"
import { ChooseUsType } from "../../../types/home/ChooseUsType";
import { AnimatePresence, motion } from "framer-motion";

const ChooseUs: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(true)
    return (
        <motion.section className="w-full min-h-[780px] bg-black p-20 Flex-Col gap-36 sm:gap-24 box-border"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <h1 className="Collection-Section-Title text-[28px] sm-d:text-center font-medium leading-[60px] 2xs:leading-[30px] 2xs:mb-6 tracking-4% text-Golden">Why Choose Us?</h1>
                        <h2 className="w-[551px] sm-d:text-center sm:w-[400px] sm-d:w-auto 1xs:!text-xl text-[36px] 2xl:text-[28px] sm:!text-2xl 2xl:leading-[50px] font-bold leading-[60px] tracking-4% text-white">Extremely High Standard of
                            Customer Satisfaction</h2>
                    </motion.div>
                )}

            </AnimatePresence>
            <AnimatePresence>
                {isHovered && (
                    <motion.div className="w-full h-auto flex justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: 'linear' }}
                    >
                        <div className="w-full 2x-l:w-[600px] grid grid-cols-4 gap-9 2x-l:gap-x-3 sm-d:gap-11 2x-l:grid-cols-2 sm-d:grid-cols-1 2x-l:grid-rows-auto justify-items-center">


                            {
                                ChooseUsItem.map((item: ChooseUsType, index) => {
                                    const { img, title, text } = item;
                                    return (
                                        <div key={index} className=" h-full w-[224px] sm:w-[200px] text-center">
                                            <div className="w-[121px] 2x-l:w-[100px] h-[126px] 2x-l:h-[100px] sm:!w-[70px] sm:!h-[70px] Flex-Center mx-auto rounded-full bg-CommonBg mb-1 sm:mb-0">
                                                <div className={`${index == 0 ?
                                                    'w-[84px] 2x-l:w-[60px] h-[84px] 2x-l:h-[60px] sm:!w-[40px] sm:!h-[40px]'
                                                    : index == 1 ? 'w-[98px] h-[98px] 2x-l:w-[70px] 2x-l:h-[70px] sm:!w-[40px] sm:!h-[40px]'
                                                        : 'w-[117px] 2x-l:w-[90px] h-[117px] 2x-l:h-[90px] sm:w-[50px] sm:h-[50px]'
                                                    }`}>
                                                    {img}
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-[20px] leading-[60px] tracking-4% 2xl:text-[19px] sm:text-[18px] ">{title}</h3>
                                            <p className="font-normal text-[12px] leading-[30px] tracking-4% 2xl:text-[11px] sm:text-[10px] 2xl:leading-[25px] sm:!leading-[20px] sm:-mt-2 ">{text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </motion.section >
    )
}
export default ChooseUs