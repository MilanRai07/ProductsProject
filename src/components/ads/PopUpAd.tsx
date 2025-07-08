import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as Cancel } from '../../assets/svg/cancel-button.svg';
import { useGetPopUpQuery } from '../../services/PopUpApi';

type props = {
    setShowPopUp: Dispatch<SetStateAction<boolean>>
}
const PopUpAd: React.FC<props> = ({ setShowPopUp }) => {

    const closePop = () => {
        localStorage.setItem('popUp', '1');
    }

    let currentPage = 2;
    let limit = 1
    const { data, isFetching } = useGetPopUpQuery({ currentPage, limit })

    if (isFetching || !data?.items || data?.items.length === 0) {
        return null;
    }
    return (
        <>
            <div className="w-[840px] h-[463px]  xl:w-[800px] x-l:w-[680px] lg:!w-[550px] sm-d:!w-[450px] 
                xs:!w-[350px] x-l:h-[400px] lg:!h-[300px] sm-d:!h-[250px] bg-white rounded-[10px] flex overflow-hidden">
                <div className='w-[342px] h-full'>
                    {
                        !data?.items[0]?.image_url ? (
                            <div className='w-full h-full text-sm sm:text-sm'>No image avaiable</div>
                        ) : (
                            <img src={data.items[0].image_url} alt="Ads Image Here" className='w-full h-full object-cover'></img>
                        )
                    }
                </div>
                <div className=' relative text-center h-[463px] x-l:h-[400px] lg:!h-[300px] sm-d:h-[220px] sm-d:py-7 font-bold text-black flex flex-col items-center gap-12 sm-d:gap-7 justify-center w-[498px]'>
                    <h1 className='Ads-Title'>{data?.items[0]?.title}</h1>
                    <div className=''>
                        <h1 className='Ads-Detail1'>{`${data?.items[0]?.description?.discount}% OFF`}</h1>
                        <p className='Ads-Detail2'>{data?.items[0]?.description?.title}</p>
                    </div>
                    <div className='w-[276px] sm-d:w-[150px] h-[94px] lg:h-[74px] sm-d:h-[60px] flex flex-col justify-between'>
                        <a
                            href={data?.items[0]?.description?.btnPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer"
                            onClick={closePop}
                        >
                            <button className='Ads-Info1'>{data?.items[0]?.description?.btnText}</button>
                        </a>
                        <p className='Ads-Info2'>{data?.items[0]?.description?.subTitle}</p>
                    </div>
                    <Cancel className='absolute top-7 right-7 cursor-pointer hover:scale-110 transition' onClick={() => setShowPopUp(false)} />
                </div>
            </div >
        </>
    )
}
export default PopUpAd;