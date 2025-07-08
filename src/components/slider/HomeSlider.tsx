import { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Left } from "../../assets/svg/chevronLeft.svg";
import { ReactComponent as Right } from "../../assets/svg/chevronRight.svg";
import { HomeSliderItem } from "../../localData/home/HomeSliderItem";
import { Link } from "react-router-dom";

const HomeSlider: React.FC = () => {

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

    const onNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndex = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
            return updatedIndex;
        })
    };

    const onPrev = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const Position = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ]
    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.8, zIndex: 3 },
        left: { x: "-90%", scale: 0.6, zIndex: 2 },
        right: { x: "90%", scale: 0.6, zIndex: 1 },
        right1: { x: "50%", scale: 0.8, zIndex: 3 },
    };

    return (
        <section>
            <div className="flex justify-center items-center gap-7 sl2:gap-5 sl3:gap-3">
                {/* Left Arrow */}
                <div className="w-[90px] 2xl:w-[80px] mlg:w-[70px] sl2:w-[60px] sl4:w-[50px] sl4:h-[50px] sl2:h-[70px] mlg:h-[70px] 2xl:h-[80px] h-[90px]" onClick={onPrev}>
                    <Left className="h-full w-full cursor-pointer stroke-white" />
                </div>

                {/* Slider Container */}
                <div className="w-[1000px] 2xl:w-[920px] 2x-l:w-[800px] xl:!w-[660px] mlg:!w-[550px] m-d:!w-[450px] sm:!w-[200px] 
                sl1:!w-[350px] sl2:!w-[300px] sl4:!w-[200px] sl4:!h-[110px] sl3:!w-[250px] sl3:!h-[150px]  sl2:!h-[200px] sl1:!h-[250px] m-d:!h-[300px]  h-[500px]  2xl:h-[480px] 
                xl:!h-[440px] mlg:!h-[370px] flex items-center justify-center relative">
                    {
                        HomeSliderItem.map((item, index) => {
                            const isCenter = positionIndexes[index] === 0;
                            return (
                                <motion.div
                                    key={index}
                                    className="rounded-[10px] overflow-hidden absolute h-full"
                                    initial="center"
                                    animate={Position[positionIndexes[index]]}
                                    variants={imageVariants}
                                    whileHover={isCenter ? { y: -10 } : {}}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    style={{ width: "40%", position: "absolute" }}
                                >
                                    <img src={item.img} alt="slider image" className="w-full h-full object-cover" />
                                    {isCenter ? (
                                        <Link to={item.path} className="w-full h-full absolute inset-0">
                                            <div className="w-full h-full bg-black/30 backdrop-blur-[0.5px]"></div>
                                        </Link>
                                    ) : (
                                        <div className="w-full h-full bg-black/40 absolute inset-0 backdrop-blur-sm"></div>
                                    )}
                                    {
                                        isCenter && (
                                            <motion.p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                                    font-semibold text-2xl mlg:text-lg sm:!text-sm text-center
                                    "
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, ease: 'easeIn' }}
                                            >{item.title}
                                            </motion.p>
                                        )
                                    }
                                </motion.div>

                            );
                        })
                    }
                </div>

                {/* Right Arrow */}
                <div className="w-[90px] 2xl:w-[80px] mlg:w-[70px]  sl2:w-[60px] sl2:h-[70px] mlg:h-[70px] h-[90px] 2xl:h-[80px]" onClick={onNext}>
                    <Right className="w-full h-full cursor-pointer stroke-white" />
                </div>
            </div>
        </section >
    );
};

export default HomeSlider;
