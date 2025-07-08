import TestimonialCard from "../../../components/cards/TestimonialCard";
//  import { TestimonialItem } from "../../../localData/home/TestimonialItem";
import { useGetTestimonialQuery } from "../../../services/Testimonials";
import { TestimonialType } from "../../../types/home/TestimonialType";
import Marquee from "react-fast-marquee";

const Testimonials: React.FC = () => {
    let currentPage = 1;
    let limit = 99999999;

    const { data, isFetching, isError } = useGetTestimonialQuery({ currentPage, limit });
    return (
        <section className="w-full min-h-[500px] bg-CommonBg p-10 sm:p-5 flex flex-col items-center gap-16 box-border overflow-hidden">
            <div className="text-center">
                <h1 className="font-bold text-[28px] leading-[60px] sm:text-[20px] tracking-[0.04em] text-Golden">
                    Testimonials
                </h1>
                <h2 className="w-[530px] sm:w-[300px] font-bold text-[30px] sm:text-[20px] leading-[40px] sm:leading-[30px] tracking-[0.04em] mx-auto">
                    Here’s what our satisfied clients are saying
                </h2>
            </div>

            {
                isError && (
                    <div className="flex justify-center">
                        Something went wrong!
                    </div>
                )
            }

            {
                isFetching && (
                    <div className="flex justify-center">
                        Loading...
                    </div>
                )
            }

            {
                (!isError && !isFetching && data?.items.length > 0) && (
                    <Marquee
                        speed={50}
                        pauseOnHover
                        pauseOnClick
                        gradient={false}
                        className="w-full"
                    >
                        <div className="flex gap-10 px-5">
                            {data?.items?.map((item: TestimonialType, index: number) => (
                                <TestimonialCard
                                    key={index}
                                    img={item.image_url}
                                    name={item.fullname}
                                    text={item.description}
                                    star={item.rating}
                                    index={index}
                                />
                            ))}
                        </div>
                    </Marquee>
                )
            }
        </section>
    );
};

export default Testimonials;
