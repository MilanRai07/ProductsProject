import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// import '../../style/component/imgSlider.css';
// @ts-ignore
import 'swiper/css/effect-cube';

interface props {
    imageSlider: string[]
}
const AssetsImage: React.FC<props> = ({ imageSlider }) => {
    return (
        <>
            <Swiper
                className=""
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                loop={false}
            >
                {
                    imageSlider.map((img: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <img className="w-full h-full object-cover cursor-grab" src={img} alt='image here'></img>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default AssetsImage;

