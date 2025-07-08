import HeroAbout from '../../assets/images/heroImages/heroAbout.webp';
// import TrapezoidComponent from '../trapezoid/TrapezoidComponent';

const HeroAboutUs: React.FC = () => {
    return (
        <section className="w-full h-[650px] md:h-[650px] sm:h-[600px] sm-d:h-[550px] 2xs:h-[500px] relative">
            <img src={HeroAbout} alt="about us" className='w-full h-full absolute object-cover top-0 left-0 z-10' />
            <div className='w-full h-full absolute top-0 left-0 z-20 bg-black/30'></div>
            <h1 className='font-bold text-[30px] leading-[45px] tracking-7% 
            absolute top-[50%] z-30 text-black left-1/2 -translate-x-1/2  x-l:text-2xl sm-d:text-xl xs:text-[17px] 2xs:text-[14px] m-d:leading-[25px] sm-d:leading-[23px'>
                About Us
            </h1>

            {/* <div className='absolute z-20 -bottom-4 right-16 lg:right-12 xs:right-1/2 xs:translate-x-1/2'>
                <TrapezoidComponent base='Company' current='About Us' fill='#161717' color='White'/>
            </div> */}
        </section >
    )
}
export default HeroAboutUs;