import PillTitle from "../../../components/titles/PillTitle";
import { ContactInfoItem } from "../../../localData/contactUs/ContactInfoItem";

const ContactInfo: React.FC = () => {
    return (
        <section className="w-full h-[792px] d1:h-auto d1:py-10  bg-CustomGrey Vertical-Divs-Center gap-28 l-g:gap-20 px-[70px]">
            <div>
                <PillTitle titleName='Contact info' />
            </div>
            <div className="flex justify-between d1:flex-col d1:items-center w-full gap-10 l-g:flex-wrap l-g:justify-center l-g:gap-4 gl5:gap-3">

                <div className='w-[330px] 3xl:w-[300px] d1:w-[80%] xl:h-[330px] sm:!h-[280px] h-[444px] d1:h-[300px] text-center flex flex-col justify-between py-4 gl5:pb-8 '>
                    <div className=' h-[326px] d1:h-[250px] Flex-Col-Justify-Around items-center'>
                        <div className='w-[96px] h-[100px] xl:w-[80px] xl:h-[70px] l-g:w-[60px] l-g:h-[50px] sm:!w-[40px] sm:!h-[40px]'>
                            {ContactInfoItem[0].img}
                        </div>
                        <h3 className='font-bold text-[23px] xl:text-[21px] l-g:text-[20px] xs:!text-[16px] sm:!text-[18px] sm:leading-[24px] xl:leading-[28px] leading-[34.5px] tracking-4%'>{ContactInfoItem[0].title}</h3>
                        <p className='font-light text-[15px] xl:text-[14px] sm:!text-xs xs:!text-[10px] l-g:text-[13px] l-g:leading-[16px] xl:leading-[18px]  leading-[22.5px] tracking-4%'>{ContactInfoItem[0].detail}</p>
                    </div>
                    <a href='tel:+9779851136771'>
                        <h1 className='font-bold text-[18px]  xl:text-[21px]  sm:!text-[14px] xs:!text-[10px] sm:leading-[24px] xl:leading-[28px] l-g:text-[20px] leading-[34.5px] tracking-4% text-Golden'>{ContactInfoItem[0].footer}</h1>
                    </a>
                </div >

                <div className="w-1 bg-[#16171766]"></div>

                <div className='w-[330px] 3xl:w-[300px] d1:w-[80%] xl:h-[330px] sm:!h-[280px] h-[444px] d1:h-[300px] text-center flex flex-col justify-between py-4 gl5:pb-8 '>
                    <div className=' h-[326px] d1:h-[250px] Flex-Col-Justify-Around items-center'>
                        <div className='w-[96px] h-[100px] xl:w-[80px] xl:h-[70px] l-g:w-[60px] l-g:h-[50px] sm:!w-[40px] sm:!h-[40px]'>
                            {ContactInfoItem[1].img}
                        </div>
                        <h3 className='font-bold text-[23px] xl:text-[21px] l-g:text-[20px] xs:!text-[16px] sm:!text-[18px] sm:leading-[24px] xl:leading-[28px] leading-[34.5px] tracking-4%'>{ContactInfoItem[1].title}</h3>
                        <p className='font-light text-[15px] xl:text-[14px] sm:!text-xs xs:!text-[10px] l-g:text-[13px] l-g:leading-[16px] xl:leading-[18px]  leading-[22.5px] tracking-4%'>{ContactInfoItem[1].detail}</p>
                    </div>
                    <a href='tel:+9779851136771'>
                        <h1 className='font-bold text-[18px]  xl:text-[21px]  sm:!text-[14px] xs:!text-[10px] sm:leading-[24px] xl:leading-[28px] l-g:text-[20px] leading-[34.5px] tracking-4% text-Golden'>{ContactInfoItem[1].footer}</h1>
                    </a>
                </div >

                <div className="w-1 bg-[#16171766]"></div>

                <div className='w-[330px] 3xl:w-[300px] d1:w-[80%] xl:h-[330px] sm:!h-[280px] h-[444px] d1:h-[300px] text-center flex flex-col justify-between py-4 gl5:pb-8 '>
                    <div className=' h-[326px] d1:h-[250px] Flex-Col-Justify-Around items-center'>
                        <div className='w-[96px] h-[100px] xl:w-[80px] xl:h-[70px] l-g:w-[60px] l-g:h-[50px] sm:!w-[40px] sm:!h-[40px]'>
                            {ContactInfoItem[2].img}
                        </div>
                        <h3 className='font-bold text-[23px] xl:text-[21px] l-g:text-[20px] xs:!text-[16px] sm:!text-[18px] sm:leading-[24px] xl:leading-[28px] leading-[34.5px] tracking-4%'>{ContactInfoItem[2].title}</h3>
                        <p className='font-light text-[15px] xl:text-[14px] sm:!text-xs xs:!text-[10px] l-g:text-[13px] l-g:leading-[16px] xl:leading-[18px]  leading-[22.5px] tracking-4%'>{ContactInfoItem[2].detail}</p>
                    </div>
                    <a href='tel:+9779851136771'>
                        <h1 className='font-bold text-[18px]  xl:text-[21px]  sm:!text-[14px] xs:!text-[10px] sm:leading-[24px] xl:leading-[28px] l-g:text-[20px] leading-[34.5px] tracking-4% text-Golden'>{ContactInfoItem[2].footer}</h1>
                    </a>
                </div >
            </div>
        </section>
    )
}
export default ContactInfo



//  {
//                     ContactInfoItem.map((item: contactUs, index: number) => {
//                         const { img, title, detail, footer } = item;
//                         return (
//                             <div key={index} className={index == 1 ? 'border-r-[3px] border-l-[3px] l-g:border-l-0 l-g:border-r-0 gl5:border-b-[2px] border-[#16171766] border-solid px-[135px] 2xl:px-[70px] 2x-l:px-[50px] xl:!px-[35px] l-g:px-0'
//                                 : (index == 0 || index == 1) ? 'gl5:border-b-[2px] gl5:border-[#16171766] ' :
//                                     ''}>
//                                 <ContactUsCard
//                                     img={img}
//                                     title={title}
//                                     detail={detail}
//                                     footer={footer}
//                                 />
//                             </div>
//                         )
//                     })
//                 }