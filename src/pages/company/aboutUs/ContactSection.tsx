import { motion } from 'framer-motion'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useIsDesktop from '../../../customHook/useIsDesktop';

const ContactSection: React.FC = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const isDesktop = useIsDesktop();


    return (
        <section className="h-[426px] bg-[#D9D9D9] w-full p-[75px] sl1:p-[60px] 2xl:h-[350px] m-d:h-[300px] sl1:h-[240px] xs:!h-[270px] flex justify-between items-center 2x-l:flex-col 2xl:gap-4 2x-l:items-start sl1:items-center sl1:gap-7"
            onMouseEnter={() => {
                if (isDesktop) setIsHover(true);
            }}
            onMouseLeave={() => {
                if (isDesktop) setIsHover(false);
            }}
        >
            <motion.div className="w-[740px] h-[136px] mlg:w-[570px] m-d:max-w-[500px] sl1:max-w-[450px] xs:!max-w-[350px] text-black sl1:text-center"
                initial={{ opacity: isDesktop ? 0 : 1 }}
                animate={isHover ? { opacity: 1, y: -10 } : { opacity: isDesktop ? 0 : 1, y: isDesktop ? 0 : 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <h1 className="font-bold text-[28px] leading-[60px] mlg:text-[24px] m-d:text-[22px] sl1:text-[20px] xs:text-[18px] sl1:leading-[40px] m-d:leading-[50px] mlg:leading-[45px] xs:!leading-[25px] tracking-4%">
                    Ready To Start New Project With STL?
                </h1>
                <p className="font-normal text-[13px] mlg:text-[11px] xs:mt-4 sl1:text-[10px] xs:text-[9px] xs:leading-[14px] sl1:leading-[15px] m-d:leading-[20px] mlg:leading-[21px] leading-[25px] w-full">
                    Let’s bring your vision to life! Whether you’re designing a home or a
                    business space, our team at STL is here to create stylish, functional,
                    and innovative interiors tailored to your needs.
                    Contact us today and let’s start designing your dream space together!
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: isDesktop ? 0 : 1 }}
                animate={isHover ? { opacity: 1, y: -10 } : { opacity: isDesktop ? 0 : 1, y: isDesktop ? 0 : -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <NavLink to='/contactus'>
                    <button className=" font-semibold text-[23px] mlg:text-[18px] m-d:text-[15px] sl1:text-sm m-d:w-[160px] sl1:w-[150px] leading-[60px] tracking-4% w-[213px] mlg:w-[180px] h-[69px] mlg:h-[50px] m-d:h-[40px] sl1:h-[35px] mlg:leading-0 mlg:flex mlg:items-center mlg:justify-center bg-black text-white hover:bg-DarkGolden transition">
                        Contact Us
                    </button>
                </NavLink>
            </motion.div>
        </section>
    )
}
export default ContactSection