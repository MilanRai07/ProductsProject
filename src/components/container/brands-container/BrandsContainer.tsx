import { useEffect, useState } from 'react';
import image from '../../../assets/images/mergeImages/collection1.webp';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsDesktop from '../../../customHook/useIsDesktop';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { ReactComponent as Left } from '../../../assets/svg/chevronLeft.svg'
import { ReactComponent as Right } from '../../../assets/svg/chevronRight.svg';
import { useGetProductByBrandIdQuery } from '../../../services/BrandApi';
import { Link } from 'react-router-dom';

type props = {
    title: string,
    detail: string,
    id: number
}

const BrandsContainer: React.FC<props> = ({ title, detail, id }) => {
    const [isHover, setIsHover] = useState<boolean>(true);
    const isDesktop = useIsDesktop();
    const [path, setPath] = useState<string>('')
    const { data, isError } = useGetProductByBrandIdQuery(id);

    const swiperRef = useRef<any>(null);

    const goNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const goPrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    useEffect(() => {
        title == 'Ozone' ? setPath('/ozone-brands') :
            title == 'Godrej' ? setPath('/godrej-brands') :
                title == 'Neo Appliances' || title == 'Neo' ? setPath('/neo-brands') :
                    title == 'Ironwood' ? setPath('/ironwood-brands') :
                        setPath(`/brands/${title}`)

    }, [title])

    if (isError) {
        return (
            <div className='w-full Loading'>
                Something went wrong
            </div>
        )
    }

    return (
        <section className="h-[600px] pl-[75px] pr-0 gl6:pl-[50px] py-5 mlg:px-[50px] mt-[40px] mlg:pb-10 mlg:!-mt-[30px] 2xs:mt-24 mlg:h-auto"
            onMouseEnter={() => {
                if (isDesktop) setIsHover(true);
            }}
            onMouseLeave={() => {
                if (isDesktop) setIsHover(false);
            }}
        >
            <motion.div className="w-full h-[543px] xl:!h-[480px] gl2:h-[570px] grid grid-cols-2 mlg:grid-cols-1 mlg:!h-[900px] gap-16"
                initial={{ opacity: isDesktop?0:1 }}
                animate={{
                    opacity: isHover ? 1 : isDesktop?0:1
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >

                <div className="min-w-[576px] gl2:min-w-[400px] gl6:min-w-[300px] 2xs:!min-w-[250px] h-full overflow-hidden">
                    <img src={image} alt="images" className='w-full h-full object-cover hover:scale-105 transition ease-in-out' />
                </div>
                <div className='h-full w-full Flex-Col justify-around gl2:justify-center gl2:gap-10'>
                    <h1 className='font-bold text-[32px] 2xl:w-[300px] mlg:!w-full xl:!w-[310px] xl:text-[27px] sm:!text-[24px] sm:!leading-[24px] leading-[32px] xl:leading-[26px] tracking-[0.05em] w-[581px]'>
                        {title}
                        <span className='ml-2 font-normal text-[13px] sm:text-[12px] sm:leading-[24px] leading-[26px] tracking-4%'>{detail.slice(0, 150) + '...'}</span>
                    </h1>
                    <div>
                        <Link to={path}>
                            <button className='Black-Square-Btn xl:w-[200px] xl:!text-sm sm:!text-[10px] mlg:mt-8 '>
                                {`${title}'s Products`}
                            </button>
                        </Link>
                    </div>
                    <div className='relative mlg:mt-8 h-[300px] w-full '>
                        <div className='w-full h-full'>
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                slidesPerView='auto'
                                centeredSlides={false}
                                spaceBetween={20}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {
                                    data?.items?.map((item, index) => {
                                        const { featured_image, title, slugs } = item.product;
                                        return (
                                            <SwiperSlide key={index} className="h-full !w-[220px] xl:!w-[200px] Flex-Col gap-2 items-center">
                                                <Link key={id} to={`/assets-singlepage/${slugs}`}>
                                                    <div className='w-[220px] xl:w-[200px] h-[242px]'>
                                                        <img src={featured_image} alt={title} className='w-full h-full object-cover' />
                                                    </div>
                                                    <p className='font-semibold text-xs leading-[18px]  tracking-2% text-[#3D3D3DE5] h-[65px]'>{title.slice(0, 70) + '...'}</p>
                                                    {/* <p className='font-semibold text-xs leading-[18px]  tracking-2% text-[#3D3D3DE5]'></p> */}
                                                </Link>

                                            </SwiperSlide>
                                        )
                                    }
                                    )
                                }
                            </Swiper>
                            <div className='absolute left-[60%] xl:left-[55%] mlg:left-[73%] -top-28 xl:-top-16 cursor-pointer'>
                                <Left className='w-[50px] h-[50px] 2xl:w-[45px] sm:!w-[40px] sm:!h-[40px] 2xl:h-[45px] stroke-black '
                                    onClick={goPrev}
                                />
                            </div>
                            <div className='absolute -top-28 xl:-top-16 left-[70%] xl:left-[65%] mlg:left-[87%]  cursor-pointer'>
                                <Right className='w-[50px] h-[50px] 2xl:w-[45px]  sm:!w-[40px] sm:!h-[40px]  2xl:h-[45px] stroke-black '
                                    onClick={goNext}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
export default BrandsContainer;