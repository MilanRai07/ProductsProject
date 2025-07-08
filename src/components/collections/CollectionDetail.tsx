import { Dispatch, RefObject, SetStateAction } from 'react';
import { ReactComponent as Back } from '../../assets/svg/blackBack.svg';
import { motion } from "framer-motion"
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';
import { Link } from 'react-router-dom';
import './Collection.css';
import { useCleanText } from '../../customHook/useCleanText';

type props = {
    setShowDetail: Dispatch<SetStateAction<boolean>>
    specs: string
    image: string | undefined
    title: string,
    BestSellingRef: RefObject<HTMLDivElement | null>
    slugs: string
}

const CollectionDetail: React.FC<props> = ({ title, setShowDetail, specs, image, slugs, BestSellingRef }) => {

    //when i press go back icon, the best selling comes from top
    const scrollToTop = useSmoothScrollTop();
    const goBack = () => {
        setShowDetail(false)
        setTimeout(() => {
            if (BestSellingRef.current) {
                scrollToTop(BestSellingRef.current);
            }
        }, 100);
    }



    return (
        <motion.section
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className='mt-7 md:mb-4'
        >
            <div onClick={goBack} className='mb-16 cursor-pointer'>
                <Back className='w-[30px] h-[30px] sm-d:w-[25px] sm-d:h-[25px]' />
            </div>
            <div className='flex gap-16 items-center 2x-l:gap-12 2xs:gap-10 md:Flex-Col'>
                <div className='w-[435px] 2x-l:w-[400px] l-g:w-[350px] md:!w-[400px] sm-d:!w-[350px] 2xs:!w-[300px] 2x-l:h-[500px] md:!h-[450px] sm:!max-h-[350px] sm-d:!h-[300px] h-[524px] overflow-hidden rounded-[30px] shadow-[0px_4px_4px_1px(rgba(0,0,0,0.5))]'>
                    <img src={image} alt={title} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col gap-7 sm-d:gap-5 text-start md:text-start w-[500px] 2x-l:w-[400px] l-g:w-[300px] md:!w-[400px] sm-d:!w-[350px] 2xs:!w-[300px] md:tracking-tight'>
                    <h1 className='Coll-Title'>{useCleanText(title.slice(0, 100) + '...')}</h1>
                    <div>
                        <h2 className='Coll-Sub-Title mb-2'>Specifications</h2>
                        <p dangerouslySetInnerHTML={{ __html: useCleanText(specs) }} className='rich-text-collection md:text-justify Coll-Detail' />
                    </div>

                    <div>
                        <Link to={`/assets-singlepage/${slugs}`}>
                            <button className='mt-3 w-[159px] h-[41px] Black-Btn l-g:w-[130px] sm:text-[14px]'>See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default CollectionDetail;