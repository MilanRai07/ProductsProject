import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router";
import { CommonDropType } from "../../../types/navbar/DropdownType";

const CommonDrop: React.FC<CommonDropType> = ({ lists, images, fadeVariants }) => {
    console.log('navbar list', lists.length);

    return (
        <div className="w-full h-[446px] xl:h-[300px] x-l:h-[260px] bg-black Flex-Center relative">
            <AnimatePresence>
                <motion.div className="Flex-Center w-[89%] absolute"
                    key={JSON.stringify(lists)}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    transition={{ duration: 0.4 }}
                >
                    <div className="w-1/2">
                        <ul
                            className={`font-bold x-l:font-semibold text-base xl:text-sm x-l:text-[13px] Flex-Col justify-start pr-2
                                          ${lists.length > 6 ? 'max-h-[230px] xl:max-h-[200px] overflow-y-auto hide-scrollbar' : 'justify-around'}
                                       `}
                        >
                            {lists.map((item, index) => {
                                const { name, path } = item;
                                return (
                                    <li key={index} className="mb-7 xl:mb-4">
                                        <NavLink to={path}>{name}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="w-[774px] h-[321px] xl:w-[500px] xl:h-[240px] x-l:h-[200px]  flex gap-2">
                        <div className="Drop-Long-Image-Box">
                            <img src={images[0]} alt='image here' className="Drop-Image"></img>
                        </div>
                        <div className="w-[300px] xl:w-[200px] x-l:w-[170px] h-full flex flex-col gap-2">
                            <div className="Drop-Short-Image-Box">
                                <img src={images[1]} alt='image here' className="Drop-Image"></img>
                            </div>
                            <div className="Drop-Short-Image-Box">
                                <img src={images[2]} alt='image here' className="Drop=Image"></img>
                            </div>
                        </div>
                        <div className="Drop-Long-Image-Box">
                            <img src={images[3]} alt='image here' className="Drop-Image" />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default CommonDrop;