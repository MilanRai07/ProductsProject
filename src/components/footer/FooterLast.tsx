// import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/company-logo.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as Insta } from '../../assets/svg/instagram.svg';
import { ReactComponent as Twit } from '../../assets/svg/x.svg';
import useFooterList from "../../localData/FooterList";
import FooterLists from './FooterLists';
import { ReactComponent as Chevron } from '../../assets/svg/chevronLeft.svg';
import FooterDrop from './FooterDrop';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const FooterLast: React.FC = () => {
    const items = ['About', 'Assets', 'Brands', 'Others'];
    const [list, setList] = useState<{ name: string; path: string }[] | null>(null);
    const [showDrop, setShowDrop] = useState(false);
    const FooterList = useFooterList();

    const getList = (name: string) => {
        name == 'About' ? setList(FooterList.about.lists) :
            name == 'Assets' ? setList(FooterList.assets.lists) :
                name == 'Brands' ? setList(FooterList.solutions.lists) :
                    setList(FooterList.support.lists)
        setShowDrop(true)
    }

    return (
        <section className="w-full p-[75px] sm:p-[50px] h-[413px] 2xl:h-auto box-border">
            <div className="Flex-Between 2xl:flex-col-reverse 2xl:gap-10 m-d:gap-7 border-b-[0.3px] border-b-white m-d:border-none pb-9">
                {/* this list shows in large screens */}
                <div className="Flex-Between gap-28 2xl:gap-20 xl:!gap-10 mlg:!gap-7 m-d:hidden">
                    <FooterLists title={FooterList.about.title} lists={FooterList.about.lists} />
                    <FooterLists title={FooterList.assets.title} lists={FooterList.assets.lists} />
                    <FooterLists title={FooterList.solutions.title} lists={FooterList.solutions.lists} />
                    <FooterLists title={FooterList.support.title} lists={FooterList.support.lists} />
                </div>
                {/* this shows in smaller devices */}
                <div className="hidden m-d:block relative w-full py-6 px-7 xs:py-3 text-white ">

                    <ul className="Flex-Col justify-between list-none h-[300px] sm-d:h-[250px] xs:h-[200px] mb-5">

                        {
                            items.map((item, index) => {
                                return (
                                    <li key={index} className='flex w-full justify-between items-center border-b-[0.5px] border-b-white/50 pb-2 Nav-Item sm:text-[13px] xs:text-[12px]'
                                        onClick={() => getList(item)}
                                    >
                                        {item}
                                        <div className=''>
                                            <Chevron className='h-5 w-5 -rotate-90 stroke-white' />
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <AnimatePresence>
                        {
                            showDrop && (
                                <motion.div className='absolute inset-0'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}

                                >
                                    <FooterDrop lists={list} setShowDrop={setShowDrop} />
                                </motion.div>

                            )
                        }
                    </AnimatePresence>
                </div>
                <div className='w-[200px] 2xl:w-[180px] sm-d:w-[150px] xs:w-[120px] m-d:h-[140px] h-[175px] Horizontal-Divs-Center justify-between'>
                    <NavLink to='/'>
                        <Logo className='w-[90px] h-[90px] m-d:w-[75px] m-d:h-[75px]' />
                    </NavLink>
                    <div className='w-full Flex-Between'>
                        <Facebook className='w-[38px] h-[38px] m-d:w-[30px] m-d:h-[30px] xs:w-[25px] xs:h-[25px]' />
                        <Insta className='w-[38px] h-[38px] m-d:w-[30px] m-d:h-[30px]  xs:w-[25px] xs:h-[25px]' />
                        <Twit className='w-[40px] h-[40px] stroke-white m-d:w-[32px] m-d:h-[32px]  xs:w-[27px] xs:h-[27px]' />
                    </div>
                </div>
            </div>
            <div className="mt-9 m-d:mt-4 2xl:text-center">
                <p className="font-medium text-[15px] leading-[30px]">©  All rights reserved 2025</p>
            </div>
        </section>
    )
}
export default FooterLast;