import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { fadeVariants } from "../../../utils/FadeVariants";
import useGetContactNav from "../../../customHook/useGetContactNav";

interface props {
    showContact: Boolean,
    expandAnimation: Boolean,
    shrinkAnimation: Boolean,
}


const DropContact: React.FC<props> = ({ showContact, expandAnimation, shrinkAnimation }) => {

    const { contactList } = useGetContactNav();
    return (
        <AnimatePresence mode="wait">
            {showContact && (
                <motion.div className='absolute z-10 -right-14 xl:!-right-7 top-[185%] w-[180px] xl:!w-[130px] h-[200px] xl:!h-[170px] x-l:!h-[130px] bg-black'
                    key={expandAnimation ? 'expand-on' : 'expand-off'}
                    variants={fadeVariants}
                    initial={shrinkAnimation ?
                        {
                            width: 1290,
                            height: 446,
                            opacity: 0,
                            right: -285
                        } :
                        'initial'}
                    animate={shrinkAnimation ?
                        {
                            width: 150,
                            height: 200,
                            opacity: 1,
                            right: -40
                        } :
                        'animate'
                    }
                    exit={expandAnimation ? {
                        width: 1290,
                        height: 446,
                        opacity: 0,
                        right: -285
                    } :
                        { opacity: 0 }
                    }
                    transition={{ duration: 0.4 }}
                >
                    <ul className={`w-full h-full px-6 xl:px-5 x-l:px-3 py-2 mt-3.5  Flex-Around items-start flex-col gap-4 font-bold x-l:font-semibold xl:text-sm x-l:text-[13px] text-base leading-[18px]
                        ${contactList.length > 4 ? 'max-h-[170px] xl:max-h-[140px] x-l:max-h-[100px] overflow-y-auto hide-scrollbar' : ''}
                        `}>

                        {
                            contactList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.path}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default DropContact;