// import { ReactComponent as Tag } from '../../assets/svg/discount-tag1.svg';
// import { ReactComponent as Ozone } from '../../assets/svg/brands/ozoneotherlogo.svg';
// import { ReactComponent as Godrej } from '../../assets/svg/brands/Godrej.svg';
// import { ReactComponent as Neo } from '../../assets/svg/brands/neon.svg';
// import { ReactComponent as Iron } from '../../assets/svg/brands/Ironwood.svg';
import { ReactComponent as Star } from '../../assets/svg/star.svg';
// import TrapezoidComponent from '../trapezoid/TrapezoidComponent';
import { ProductsFromBrand } from '../../types/brand/BrandApiResponseType';
import { Link } from 'react-router-dom';

type props = {
    heroData: ProductsFromBrand | null
    title: string,
    brandDetail: string
    logo: string | undefined
}
const HeroIndia: React.FC<props> = ({ heroData, title, brandDetail, logo }) => {


    let star: number = 5;
    return (
        <section className="h-screen w-full gl6:!h-[650px] gl4:!h-[300px] m-d:!h-[300px] relative" >
            <div className="text-black mt-16 gl6:!h-[500px] gl6:mt-14 gl4:!h-[400px] gl4:!mt-10 m-d:!mt-8 m-d:!h-[400px]  w-full 3xl:w-[1100px] 2x-l:w-[1000px] xl:!w-[900px] gl6:!w-[700px] m-d:!w-[300px] absolute top-[23%] xl:!top-[17%] left-1/2 -translate-x-1/2">
                <div className='w-full h-full relative px-2'>
                    <div className="m-d:absolute m-d:left-[24%] sl1:left-32 m-d:bottom-3 w-[520px] 2x-l:w-[450px] m-d:w-[350px] sm:!left-1/2 sm:!-translate-x-1/2 sm:-top-16 h-full Flex-Col justify-center items-start xl:justify-end gap-5 gl4:gap-2 xs:gap-5">
                        <h1 className="font-bold text-[36px] leading-[47px] tracking-[0.03em] 3xl:text-[45px] 2x-l:text-[35px] gl4:text-[28px] xs:!text-[24px] gl4:leading-[30px] 2x-l:leading-[35px] 3xl:leading-[50px]">{title}</h1>
                        <p className="font-normal text-[15px] gl4:w-[400px] leading-[30px] tracking-[0.03em] 3xl:text-[14px] 2x-l:text-[12px] gl4:text-[10px] gl4:leading-[20px] 2x-l:leading-[23px] 3xl:leading-[26px]">
                            {brandDetail}
                        </p>
                    </div>

                    <div className=' h-full xl:h-[350px] w-96 absolute right-0 m-d:right-12 xl:top-10 m-d:-top-16 gl4:top-[8%]  sm:!right-24 sl2:!right-32 xs:left-1/2 xs:-translate-x-1/2 top-0 '>
                        <div className='h-full w-full relative'>
                            <div className='absolute bottom-[17%] -top-[80px] 2x-l:bottom-[65%] sm:-top-12 sl2:-top-28 right-[76%] 3xl:right-[68%] 2x-l:right-[80%] xl:!right-[60%] gl4:right-[80%] sm:!right-[60%] sl2:!right-[50%] sl3:!right-[40%] z-10 xl:z-20
                            w-[334px]  3xl:w-[280px] 2x-l:w-[200px] gl4:w-[180px] sl4:!h-[130px] sl2:!h-[128px] 2x-l:h-[200px] h-[270px] 3xl:h-[230px] p-4 rounded-[20px] bg-white Flex-Col justify-around text-black'>
                                {/* {
                                    title == 'Ozone' ? (
                                        <Ozone className='w-[83px] h-[27px] md:w-[60px] md:h-[18px]' />
                                    ) : title == 'Ironwood' ? (
                                        <Iron className='w-[100px] h-[70px] md:w-[70px] md:h-[40px]' />
                                    ) : title == 'Neo' || title == 'Neo Appliances' ? (
                                        <Neo className='w-[100px] h-[70px] md:w-[70px] md:h-[40px]' />
                                    ) : (
                                        <Godrej className='w-[100px] h-[70px] md:w-[70px] md:h-[40px]' />
                                    )
                                } */}
                                <div className='w-[60px] h-[60px] xl:w-[40px] xl:h-[40px] sl2:w-[30px] sl2:h-[30px] rounded-full overflow-hidden bg-slate-500'>
                                    {
                                        (logo !== '' || logo !== null || logo !== undefined) && (
                                            <img src={logo} alt={title} className='w-full h-full'></img>
                                        )
                                    }
                                </div>
                                <p className=' font-bold text-[13px] gl4:text-xs sm:!text-[10px] leading-[19.5px] tracking-[0.02px] w-[264px] 2x-l:w-[200px] gl4:w-[150px] h-[40px]'>
                                    {heroData?.title.slice(0, 40) ?? ''}
                                </p>
                                <div className='flex gap-3 gl4:gap-1'>
                                    {Array.from({ length: star }, (_, index) => (
                                        <Star key={index} className='gl4:scale-75' />
                                    ))}
                                </div>
                                {/* Price */}
                                {/* <p className='font-bold text-[18px] gl4:text-sm leading-[20px] tracking-[0.02em]'>

                                </p> */}

                            </div>
                            <div className='absolute h-full top-0  xl:!bottom-0 z-20 xl:z-10 xl:right-0 sm:right-[20%] sl2:right-[10%] sl3:!right-[5%]'>
                                <Link to={`/assets-singlepage/${heroData?.slugs}`}>
                                    <div className='w-[350px] 2x-l:w-[300px] mlg:w-[250px] sm:!w-[250px]  h-full  sm:!h-[250px] gl6:h-[250px]  xl:h-[300px]  relative'>
                                        <img src={heroData?.featured_image} alt={heroData?.title ?? 'product'} className='w-full h-full object-cover' />
                                        <div className='absolute -top-[10%] gl4:-top-[1%] right-5'>
                                            {/* <div className='w-[76px] h-[76px] 2x-l:w-[60px] gl4:w-[40px] gl4:h-[40px] 2x-l:h-[60px] relative '>
                                            <Tag />
                                            <p className='font-bold text-[30px] leading-[32px] gl4:text-xs 2x-l:text-base tracking-wider Absolute-Center text-white'>50%</p>
                                        </div> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='h-[48px] w-auto flex items-center justify-center absolute -bottom-20 right-16  text-black'>
                <TrapezoidComponent base='Brands' current={title} fill='white' color='black' />
            </div> */}
        </section>
    )
}
export default HeroIndia;