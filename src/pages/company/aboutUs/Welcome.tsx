import { useEffect, useState } from 'react';
import WelcomeImg from '../../../assets/images/aboutUs/welcome.webp'
import WelcomeCard from '../../../components/cards/WelcomeCard'
import { motion } from 'framer-motion'
import useIsDesktop from '../../../customHook/useIsDesktop';

const Welcome: React.FC = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const isDesktop = useIsDesktop();


    const screenWidth = window.innerWidth;

    return (
        <motion.section className="w-full h-[947px] gl3:h-[800px] md:!h-auto flex justify-center items-center md:py-7"
            style={{
                background: 'rgba(22, 23, 23, 1)'
            }}
            onMouseEnter={() => {
                if (isDesktop) setIsHover(true);
            }}
            onMouseLeave={() => {
                if (isDesktop) setIsHover(false);
            }}
        >
            <div className="h-[648px] gl3:h-[600px] x-l:!h-[500px] w-[1050px] flex md:flex-col md:items-center md:!justify-center md:!w-full md:!min-h-[950px] sm-d:!min-h-[900px] justify-between md:px-10">
                <motion.div className='h-full w-[520px] gl3:w-[400px] 2xs:w-[360px] relative md:!w-[400px] md:h-[450px] sm-d:h-[400px] sl2:h-[300px] 2xs:!h-[270px]'
                    initial={{ opacity: isDesktop ? 0 : 1 }}
                    animate={isHover ? { opacity: 1 } : { opacity: isDesktop ? 0 : 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <img src={WelcomeImg} alt="welcome" className='h-full w-full absolute z-0 top-0 left-0 gl3:left-24 md:!left-0 object-cover' />
                </motion.div>
                <div className='w-[520px] x-l:w-[470px] md:h-[480px] sl2:w-[400px] sl2:h-[440px] sl4:h-[400px] 2xs:!w-[360px] 2xs:h-[360px] h-full  relative'>
                    {
                        screenWidth > 767 ? (
                            <motion.div className='absolute top-[9%] -left-7 x-l:top-[7%] md:!top-0'
                                initial={{ opacity: 0 }}
                                animate={isHover ? { opacity: 1, x: -30 } : { opacity: 0, x: 0 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            >
                                <WelcomeCard />
                            </motion.div>
                        ) :
                            (
                                <motion.div className=''
                                    initial={{ opacity: isDesktop ? 0 : 1 }}
                                    animate={isHover ? { opacity: 1 } : { opacity: isDesktop ? 0 : 1 }}
                                    transition={{ duration: 1, ease: 'easeInOut' }}
                                >
                                    <WelcomeCard />
                                </motion.div>
                            )
                    }
                    <motion.div className='w-full absolute bottom-[3%] x-l:bottom-0 -left-[5%] gl3:-left-[30%] md:!-left-[16%] flex justify-around gl3:justify-end gl3:gap-4 p-3'
                        initial={{ opacity: isDesktop ? 0 : 1 }}
                        animate={isHover ? { opacity: 1 } : { opacity: isDesktop ? 0 : 1 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: 'easeInOut' }}
                    >
                        <div className='text-center'>
                            <p className='font-bold text-[20px] gl3:text-[18px] sm:!text-[14px] leading-[30px] tracking-4%'>25+</p>
                            <p className='font-normal text-base gl3:text-sm sm:!text-[12px] tracking-4%'>Years of Experience</p>
                        </div>
                        <div className='font-bold text-[20px] gl3:text-[18px] sm:!text-[14px] leading-[30px] tracking-4% text-center'>
                            <p>25+</p>
                            <p className='font-normal text-base gl3:text-sm  sm:!text-[12px] tracking-4%'>Partners</p>
                        </div>
                        <div className='font-bold text-[20px] gl3:text-[18px] sm:!text-[14px] leading-[30px] tracking-4% text-center'>
                            <p>25+</p>
                            <p className='font-normal text-base gl3:text-sm sm:!text-[12px] tracking-4%'>Countries</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
export default Welcome