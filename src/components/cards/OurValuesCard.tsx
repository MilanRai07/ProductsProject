import { ReactElement } from "react";

type props = {
    img: ReactElement,
    title: string,
    text: string,
    index: number
}

const OurValuesCard: React.FC<props> = ({ img, title, text, index }) => {
    return (
        <div className="w-[365px] l-g:w-[340px] h-[197px] l-g:h-[190px] mlg:h-[200px]  md:h-[170px] sm:!min-w-full sm:max-h-[130px] mlg:!w-[270px] md:w-[250px] p-4 sm:p-2 md:p-3 bg-[#D9D9D9] flex justify-center gap-4 text-black">
            <div>
                <div className={`${(index == 0 || index == 3) ?
                    'w-[50px] h-[50px] md:w-[45px] md:h-[45px] rounded-full bg-[#161717] flex items-center justify-center' : ''}`}>
                    <div className={`${index == 0 ? 'w-[40px] h-[40px] md:w-[35px] md:h-[35px]' :
                        'w-[50px] h-[50px] md:w-[40px] md:h-[40px]'
                        }`}>
                        {img}
                    </div>
                </div>
            </div>
            <div className="flex flex-col mlg:justify-around" >
                <h1 className="font-bold text-lg mlg:text-[17px] xs:text-[16px] xs:leading-[17px]  md:text-base leading-[60px] mlg:leading-[25px] sm:leading-[30px] tracking-[0.05em]">{title}</h1>
                <p className="font-normal text-[11px] mlg:leading-[19px] md:text-[11px] xs:leading-[18px] md:mt-5 sm:mt-0 md:leading-[18px] leading-[20px]">{text}</p>
            </div>
        </div>
    )
}
export default OurValuesCard;