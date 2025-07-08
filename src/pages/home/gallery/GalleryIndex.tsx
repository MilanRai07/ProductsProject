import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/ArrowTilt.svg';
// import { GalleryImages } from '../../../localData/home/GalleryImages';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGetGalleryQuery } from '../../../services/GalleryApi';

const GalleryIndex: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-50% 0px -50% 0px"
    });

    let currentPage = 1;
    let limit = 7;
    const { data, isFetching } = useGetGalleryQuery({ currentPage, limit })
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getPosition = (index: number, screenWidth: number) => {
        if (screenWidth < 640) {
            // Mobile
            return {
                left: index == 0 ? '3%' : index == 1 ? '26%' : index == 2 ? '49%' : index == 3 ? '72%' : index == 4 ? '16.8%' : index == 5 ? '40%' : '63.2%',
                top: index == 0 ? '15%' : index == 1 ? '8%' : index == 2 ? '15%' : index == 3 ? '0%' : index == 4 ? '44.5%' : index == 5 ? '40%' : '46%',
            };
        } else if (screenWidth < 793) {
            // sm screens
            return {
                left: index == 0 ? '9%' : index == 1 ? '30%' : index == 2 ? '55%' : index == 3 ? '76%' : index == 4 ? '24%' : index == 5 ? '45%' : '67%',
                top: index == 0 ? '20%' : index == 1 ? '8%' : index == 2 ? '20%' : index == 3 ? '5%' : index == 4 ? '50%' : index == 5 ? '45%' : '50%',
            };
        } else if (screenWidth < 1062) {
            // md screens
            return {
                left: index == 0 ? '10.7%' : index == 1 ? '30.5%' : index == 2 ? '50%' : index == 3 ? '69.8%' : index == 4 ? '20.4%' : index == 5 ? '41%' : '61.5%',
                top: index == 0 ? '18%' : index == 1 ? '12.2%' : index == 2 ? '18%' : index == 3 ? '20%' : index == 4 ? '47.5%' : index == 5 ? '45%' : '47.5%',
            }
        }
        else if (screenWidth < 1192) {
            return {
                left: index == 0 ? '10.7%' : index == 1 ? '30.5%' : index == 2 ? '50%' : index == 3 ? '69.8%' : index == 4 ? '20.4%' : index == 5 ? '41%' : '61.5%',
                top: index == 0 ? '15%' : index == 1 ? '12.2%' : index == 2 ? '15%' : index == 3 ? '0%' : index == 4 ? '45.5%' : index == 5 ? '40%' : '45.5%',
            }
        }
        else if (screenWidth < 1352) {
            return {
                left: index == 0 ? '7.3%' : index == 1 ? '29.2%' : index == 2 ? '51%' : index == 3 ? '72.8%' : index == 4 ? '19.4%' : index == 5 ? '41%' : '62.5%',
                top: index == 0 ? '15%' : index == 1 ? '7.2%' : index == 2 ? '15%' : index == 3 ? '0%' : index == 4 ? '44.5%' : index == 5 ? '40%' : '46%',
            }
        } else {
            // lg screens and above
            return {
                left: index == 0 ? '5%' : index == 1 ? '28%' : index == 2 ? '51%' : index == 3 ? '73.8%' : index == 4 ? '17.8%' : index == 5 ? '41%' : '64.2%',
                top: index == 0 ? '15%' : index == 1 ? '0.6%' : index == 2 ? '15%' : index == 3 ? '0%' : index == 4 ? '44.5%' : index == 5 ? '40%' : '46%',
            }
        };

    }
    return (
        <section ref={sectionRef} className="3xl:w-[1200px] h-[700px] gl2:h-[600px] gl4:h-[400px] relative">

            <Link to='/gallery'>
                <div
                    className=" cursor-pointer w-[255px] h-[195px] 3xl:w-[205px] gl3:w-[175px] gl4:w-[150px] sm:!w-[120px] sm:h-[] gl4:h-[95px] gl3:h-[110px] 3xl:h-[175px] rounded-[10px] absolute left-1/2 
            -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center z-50"
                    style={{
                        background: 'rgba(22, 23, 23, 0.9)'
                    }}
                >
                    <p className='font-bold text-[40px] gl3:text-[30px] gl4:text-[25px] sm:!text-[19px] leading-[60px] tracking-4% mr-3'>Gallery</p>
                    <Arrow className='w-[23px] h-[30px] gl3:w-[19px] gl3:h-[26px] gl4:w-[15px] gl4:h-[22px] sm:!w-[12px] sm:h-0[12px]' />

                </div>
            </Link>

            <div>
                {
                    !isFetching &&
                    data?.items.map((item, index) => {
                        const { image_url } = item;
                        return (
                            <motion.div key={index}
                                className={`absolute  w-[300px] h-[300px] 3xl:w-[250px] gl2:w-[200px] gl3:w-[150px] gl4:w-[110px] gl4:h-[110px] gl3:h-[150px] gl2:h-[200px] 3xl:h-[250px] rounded-[10px] overflow-hidden brightness-75
                                    ${index === 6 || index === 5 ? 'z-40' : index === 7 ? 'z-10' : 'z-30'}
                                `}
                                initial={{
                                    left: '50%',
                                    top: '50%',
                                }}
                                animate={isInView ? getPosition(index, screenWidth) : {}}
                                transition={{
                                    duration: 1,
                                    ease: 'easeInOut'
                                }}
                            >
                                <img src={image_url} alt="galley image" className='w-full h-full object-cover' />
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default GalleryIndex