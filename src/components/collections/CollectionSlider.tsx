// import { MergeImages } from "../../localData/home/MergeImages";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as SlideRight } from '../../assets/svg/SlideRight.svg';
import { ReactComponent as SlideLeft } from '../../assets/svg/SlideLeft.svg';
import { Navigation } from "swiper/modules";
import DOMPurify from 'dompurify';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import { useGetCategoryQuery } from "../../services/CategoryApi";
import { CategoryItems } from "../../types/category/CategoryApiResponseType.ts";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CollectionSlider: React.FC = () => {
    const [options, setOptions] = useState<string[]>([]);

    // let currentPage: number = 1;
    // let limit: number = 10;
    const { data: categoryData, isFetching, isError } = useGetCategoryQuery();

    useEffect(() => {
        if (categoryData?.items) {
            const optionsFromQuery = categoryData.items
                .filter((item: CategoryItems) => item.name !== 'Events') //we don't wnts events to  show in asstes category
                .map((item: CategoryItems) => item.name);

            setOptions(optionsFromQuery);

            console.log(optionsFromQuery);
        }
    }, [categoryData?.items]);

    return (
        <>
            <section>
                {
                    isFetching && (
                        <div className='Loading'>
                            Our Best Selling Collections are loading, please Wait...
                        </div>
                    )
                }
                {
                    isError && (
                        <div className='Loading'>
                            Something went wrong. Please try again later...
                        </div>
                    )
                }
                {
                    categoryData?.items.length == 0 && (
                        <div className='Loading'>
                            Sorry..There is no any Product at the moments
                        </div>
                    )
                }
                <div className="relative z-0 ">
                    <button className='absolute z-50 left-[0.4%] top-1/2 -translate-y-1/2 cursor-pointer'>
                        <SlideLeft className="swiper-button-prev !w-[38px] !h-[38px]  sm-d:!w-[30px] sm-d:!h-[30px] " />
                    </button>

                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        loop={true}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            517: {
                                slidesPerView: 2,
                                spaceBetween: 11
                            },
                            725: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            // 354: {
                            //     slidesPerView: 1,
                            //     spaceBetween: 30,
                            // },
                            1081: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        }}
                    >
                        {
                            options.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={`/assets/${item}`}
                                            className="w-[325px] relative h-[325px] 2xl:h-[300px] 2xl:w-[300px]  2x-l:h-[270px] 2x-l:w-[270px] x-l:h-[250px] x-l:w-[250px] sm-d:h-[200px] sm-d:w-[200px] rounded-[15px] overflow-hidden cursor-pointer"
                                        >
                                            {/* <img src='' alt="title" className="w-full h-full bg-cover" /> */}
                                            <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(0,0,0,0.8)]"></div>
                                            <h3 className="w-full font-normal text-[15px] 2x-l:text-[14px] sm:text-[13px] sm-d:text-xs leading-[30px] mt-2 text-pretty
                                             relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-20
                                             ">{item}</h3>
                                        </Link>


                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <button className='absolute z-50 right-[0.1%] top-1/2 -translate-y-1/2 cursor-pointer'>
                        <SlideRight className="swiper-button-next !w-[38px] !h-[38px] sm-d:!w-[30px] sm-d:!h-[30px] " />
                    </button>

                </div>
            </section>
        </>
    )
}
export default CollectionSlider;