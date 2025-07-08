import HomeSlider from "../../../components/slider/HomeSlider";

const Slider: React.FC = () => {
    return (
        <section className="w-full h-[934px] mlg:h-[800px] m-d:h-[600px] sl1:h-[500px] sl2:h-[450px] sl3:h-[300px] sl4:h-[250px] bg-[rgba(22, 23, 23, 1)] Flex-Col items-center justify-around">
            <h1 className="font-semibold text-[38px] md:text-[35px] m-d:text-center m-d:text-[30px] sm-d:text-[26px] xs:text-[24px] 1xs:text-[22px] m-d:leading-[32px] leading-[60px] tracking-4%">
                Discover More About Us
            </h1>
            <HomeSlider />
        </section>
    )
}
export default Slider;