import { ReactComponent as Ozone } from '../../assets/svg/brands/Ozone.in.svg'
import { ReactComponent as Godrej } from '../../assets/svg/brands/Godrej.svg'
import { ReactComponent as Neo } from '../../assets/svg/brands/neon.svg'
import { ReactComponent as Iron } from '../../assets/svg/brands/Ironwood.svg'

const HeroBrands: React.FC = () => {
    return (
        <section className="w-full h-screen relative md:!h-[550px] sm:h-[500px] sm-d:h-[500px] 2xs:!h-[650px]">
            <div className="w-[1290px] 2xl:w-full h-[380px] text-center absolute left-1/2 -translate-x-1/2 top-[30%] xl:top-[28%] 2xs:!border-b-0"
                style={{
                    borderBottom: '0.5px solid rgba(61, 61, 61, 0.5)'
                }}
            >
                <h1 className="font-bold text-[34px] leading-[60px] x-l:text-2xl sm-d:text-xl xs:text-[17px]
                 2xs:text-[14px] m-d:leading-[25px] sm-d:leading-[23px] tracking-7% text-black mb-20 xl:mb-16 md:!mb-12 sl2:!mb-9">Brands</h1>
                <div className='flex justify-between items-center 2xl:justify-around 2xs:flex-col 2xs:gap-10'
                >
                    <div className='w-[148px] h-[178px] 2xl:w-[100px] 2xl:h-[150px] md:!w-[80px] md:!h-[100px] sl2:!w-[50px] sl2:!h-[50px]'>
                        <Ozone />
                    </div>
                    <div className='w-[138px] h-[179px] 2xl:w-[100px] 2xl:h-[150px] md:!w-[80px] md:!h-[100px] sl2:!w-[50px] sl2:!h-[50px]'>
                        <Godrej />
                    </div>
                    <div className='w-[138px] h-[176px] 2xl:w-[100px] 2xl:h-[150px] md:!w-[80px] md:!h-[100px] sl2:!w-[50px] sl2:!h-[50px]'>
                        <Neo />
                    </div>
                    <div className='w-[235px] h-[119px] 2xl:w-[170px] 2xl:mt-10 2xl:h-[170px] md:!w-[120px] md:!mt-16 md:!h-[120px] md:scale-110 sl2:!w-[100px] sl2:!h-[90px] 2xs:!mt-2 '>
                        <Iron />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default HeroBrands;