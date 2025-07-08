import { ReactComponent as Slide } from '../../assets/svg/designers/designRight.svg';
import { DesignerGalleryItem } from "../../types/designer/DesignerApiResponseType";
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

type props = {
    designerImages: DesignerGalleryItem[]
}
const DesignerSlider: React.FC<props> = ({ designerImages }) => {
    const swiperRef = useRef<any>(null);

    const goLeft = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const goRight = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <div className="h-full w-full relative">
            <div className=" flex gap-2 d1:gap-1 !w-full">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView='auto'
                    centeredSlides={false}
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="mySwiper"

                >
                    {designerImages.length > 0 ? (
                        designerImages.map((item, index) => (
                            <SwiperSlide key={index} className="!w-[330px] xl:!w-auto">
                                <div className="w-[350px] d1:w-[330px] xl:!w-[350px] l-g:!w-[250px]  sm:!w-[230px] sm:!h-[310px] l-g:!h-[350px] xl:!h-[400px] d1:h-[500px] h-[570px] hover:!scale-[1.01] !transition">
                                    <img src={item.image_url} alt="designer" className="!w-full !h-full !object-cover brightness-90" />
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <div className="text-center Loading text-black h-full justify-center items-center flex">Designs coming soon..</div>
                    )}
                </Swiper>
            </div>
            <div className="absolute left-[2%]  top-1/2 z-10  -translate-y-1/2 cursor-pointer">
                <Slide className="w-[38px] h-[38px] rotate-180 x-l:w-[34px] x-l:h-[34px] sm:w-[30px] sm:h-[30px]"
                    onClick={goRight} />
            </div>

            <div className="absolute z-10 right-[5%] d1:right-[2%] top-1/2 -translate-y-1/2 cursor-pointer">
                <Slide className="w-[38px] h-[38px] x-l:w-[34px] x-l:h-[34px] sm:w-[30px] sm:h-[30px] "
                    onClick={goLeft}
                />
            </div>
        </div>
    )
}
export default DesignerSlider;
