import { useState } from 'react';
import { motion } from 'framer-motion';

type props = {
    image: string,
    title: string,
}
const AssetsCard: React.FC<props> = ({ image, title }) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <motion.div className="w-[250px] 3xl:w-[220px] h-[286px] 3xl:h-[240px] 2x-l:w-[230px] 2x-l:h-[210px] gl5:!w-[220px] gl5:h-[190px] sm:!w-[200px] sm:!h-[190px] as1:!w-[270px] as1:!h-[260px] rounded-[30px] relative z-0 cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}

            animate={{
                background: isHover ? 'rgba(205, 142, 88, 1)' : 'rgba(64, 64, 64, 0.5)'
            }}
            transition={{
                duration: 0.4, ease: 'easeInOut'
            }}
        >
            <motion.div className='absolute w-[230px]  3xl:w-[200px] sm:!w-[160px] sl2:!w-[130px] sl2:!h-[105px] gl5:!w-[180px] gl5:!h-[105px] sm:!h-[120px] as1:!w-[240px] as1:!h-[180px] 3xl:h-[130px] h-[200px] -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-[24px] overflow-hidden'
                initial={{ top: '40%' }}
                animate={{
                    top: isHover ? '38%' : '40%'
                }}
                transition={{
                    duration: 0.4, ease: 'easeInOut'
                }}

            > {/**positoins should re write again */}
                <img src={image} alt={title} className='absolute w-full h-full object-cover '></img>
            </motion.div>
            <p className='absolute bottom-5 left-1/2 -translate-x-1/2 3xl:text-sm sm:text-[13px] 2x-l:bottom-3 sl2:text-center sl2:bottom-2' >{title.slice(0, 20) + '...'}</p>
        </motion.div>
    )
}
export default AssetsCard;