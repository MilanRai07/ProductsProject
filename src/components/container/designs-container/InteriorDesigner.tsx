import { ReactComponent as Map } from '../../../assets/svg/designers/map.svg';
import { ReactComponent as Insta } from '../../../assets/svg/designers/instadesign.svg';
import { DesignerProfile } from '../../../types/designer/DesignerApiResponseType';
import { lazy, Suspense } from 'react';
const DesignerSlider = lazy(() => import('../../slider/DesignerSlider'));

type props = {
    designer: DesignerProfile | null;
}
const InteriorDesigner: React.FC<props> = ({ designer }) => {
    let socialString = designer?.socialmedia;
    let socialMedia = JSON.parse(socialString || '{}')

    if (!designer) return <div className='Loading text-black/70'>Designer Comming Soon...</div>
    return (
        <div className="grid grid-cols-3 d1:Flex-Col justify-center d1:place-items-center text-black min-h-[570px] d1:min-h-[600px] items-center d1:mx-auto gap-7 d1:gap-14">
            <div className=" h-full d1:mr-4 d1:items-center overflow-hidden Flex-Col justify-center gap-6 2xl:gap-3">
                <div className='w-[165px] 2xl:w-[120px] mlg:w-[100px] mlg:h-[100px] 2xl:h-[120px] h-[165px] rounded-full overflow-hidden'>
                    <img src={designer.image_url} alt={designer.fullname} className='w-full h-full object-cover hover:scale-105 transition-all' />
                </div>
                <p className='font-bold text-[22px] xl:text-[20px] mlg:text-[18px] mlg:leading-[20px] xl:leading-[25px] leading-[40px]'>{designer.fullname}</p>
                <div className='flex gap-4'>
                    <Map className='w-[18px] h-[18px] mlg:w-[15px] mlg:h-[15px]' />
                    <address className='font-normal text-xs leading-[20px] mlg:text-[11px] mlg:leading-[15px] xl:leading-[18px] tracking-2%'>{designer.location}</address>
                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Insta className='w-[18px] h-[18px]  mlg:w-[15px] mlg:h-[15px] cursor-pointer' />
                    </a>
                </div>
                <p className='font-normal text-sm leading-[35px] d1:text-center mlg:text-xs xl:text-[13px] xl:leading-[25px]'>
                    {designer.description.slice(0, 365) + '...'}

                </p>
            </div>
            <div className='h-full d1:h-[500px] d1:-ml-9 d1:w-full d1:pl-3 sm:!h-[310px] l-g:!h-[350px] xl:!h-[400px] col-span-2'>
                <Suspense fallback={<div className='Loading min-h-[200px] flex justify-center text-black '>...Loading Dessiners Images</div>}>
                    <DesignerSlider designerImages={designer.designer_gallery} />
                </Suspense>

            </div>
        </div>
    )
}
export default InteriorDesigner;