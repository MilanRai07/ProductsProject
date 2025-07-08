import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { ReactComponent as Left } from '../../assets/svg/chevronLeft.svg';
import { ReactComponent as Right } from '../../assets/svg/chevronRight.svg';
// import { BrandSliderItems } from '../../localData/brands/BrandSliderItem';
import { BrandItemCategory } from '../../types/brand/BrandApiResponseType';
import { Link } from 'react-router-dom';

type props = {
    data: BrandItemCategory[]
}

const ProductCollectionSlider: React.FC<props> = ({ data }) => {
    const swiperRef = useRef<any>(null);

    const goNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const goPrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };
    return (
        <section className="p-[75px]">
            <h1 className="font-bold text-[25px] sm:text-center gl2:text-[22px] gl6:text-[20px] 2xs:leading-[30px] 2xs:mb-20 leading-[60px] tracking-[0.03em] mb-7 sm:mb-14">
                Product Collections
            </h1>
            {
                data?.length < 1 && !data ?
                    (
                        <div>
                            No data available at the moment...
                        </div>
                    ) : (
                        <div className='relative w-full'>
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                slidesPerView='auto'
                                centeredSlides={false}
                                spaceBetween={20}
                                pagination={{ type: "fraction" }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {
                                    data.map((item) => {
                                        const { featured_image, title, id, content, slugs } = item.product;
                                        return (
                                            <SwiperSlide className=" cursor-pointer !h-auto bg-[#4040401A] !w-[330px] gl2:!w-[300px] gl6:!w-[250px] 1xs:!w-[220px] Flex-Col !justify-between hover:!scale-[1.02] !transition">
                                                <Link key={id} to={`/assets-singlepage/${slugs}`}>
                                                    <div className='w-full !h-[371px] gl2:!h-[300px] gl6:!h-[250px] gl4:!h-[200px] '>
                                                        <img src={featured_image} alt={title} className='!w-full !h-full !object-cover' />
                                                    </div>
                                                    <div className='p-3 gl6:p-2 flex flex-col justify-between h-[90px] gl6:h-[60px]'>
                                                        <p className='font-bold text-[15px] gl6:!text-[13px] gl6:!leading-[17px] leading-[20px] tracking-[0.01em]'>{title.slice(0, 61) + '...'}</p>
                                                        <p className='font-semibold text-[10px] gl6:!text-[8px] gl6:!leading-[18px] leading-[20px] tracking-2% text-[#00000080]'>{content.slice(0, 30) + '...'}</p>
                                                        {/* <p className='font-bold text-[15px] gl6:text-[13px] gl6!leading-[27px] leading-[30px] tracking-[0.01em] text-black'>₹58,500.00</p> */}
                                                    </div>
                                                </Link>
                                            </SwiperSlide>

                                        )
                                    }
                                    )
                                }
                            </Swiper>
                            <Left className='w-[50px] h-[50px] gl6:h-[45px] gl6:w-[45px] stroke-black absolute right-[15%] sm:right-[80%] 1xs:right-[75%] -top-20 sm:-top-[54px] cursor-pointer'
                                onClick={goPrev}
                            />
                            <Right className='w-[50px] h-[50px]  gl6:h-[45px] gl6:w-[45px] stroke-black absolute -top-20 sm:-top-[54px] right-[5%] cursor-pointer'
                                onClick={goNext}
                            />
                        </div>
                    )
            }
        </section >
    )
}
export default ProductCollectionSlider;

