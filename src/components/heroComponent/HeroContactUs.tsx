import ContactUsImage from '../../assets/images/contactImages/contact-banner-new.webp'

type props = {
   title: string
}
const HeroContactUs: React.FC<props> = ({ title }) => {
   return (
      <>
         <section className='h-screen w-full 2xl:h-[790px] xl:h-[750px] md:h-[650px] sm:h-[600px] sm-d:h-[550px] 2xs:h-[500px] relative'>
            <img src={ContactUsImage} alt="assets" className='h-full w-full absolute top-0 left-0 z-10 object-cover' />
            <div className='h-full w-full bg-black/10 absolute top-0 left-0 z-20'></div>
            <h1 className='text-[30px] leading-[40px] tracking-[0.05em] font-bold 
                absolute left-1/2 -translate-x-1/2 z-30 top-1/2 text-Black70%  x-l:text-2xl sm-d:text-xl xs:text-[17px] 2xs:text-[14px] m-d:leading-[25px] sm-d:leading-[23px]'
            >
               {title}
            </h1>
         </section>
      </>
   )
}
export default HeroContactUs;