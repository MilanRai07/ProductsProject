import img from '../../../assets/images/video/videosection.webp';
import vid from '../../../assets/images/video/videosample.webp';
// import { ReactComponent as VideoBtn } from '../../../assets/svg/Video-Button.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Videos: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    return (
        <motion.section
            className="w-full h-[649px] xs:h-[600px] 2xs:h-[500px] bg-black flex justify-center items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div className="relative w-full h-full overflow-hidden"
                initial={{ scale: 0.9, borderRadius: 0 }}
                animate={{ scale: isHovered ? 1 : 0.9, borderRadius: isHovered ? 0 : 24 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                <div className="absolute inset-0">
                    <motion.img
                        src={img}
                        alt="videos background"
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 bg-black/70 rounded-inherit"></div>
                </div>

                <div className="absolute inset-0 z-10 flex justify-around sm-d:justify-center items-center text-white">
                    <div className="h-[417px] 2xl:h-[300px]  mlg:h-[250px] xs:h-[200px] flex flex-col justify-around">
                        <h1 className="w-[581px] font-bold sm-d:text-center sm-d:w-full text-[40px] 2xl:text-[35px] xs:text-[24px] mlg:text-[30px] 2xl:leading-[40px] mlg:leading-[35px] leading-[60px]">
                            Ensuring a safe experience from design to illustration
                        </h1>
                        <p className="w-[463px] font-normal sm-d:text-center sm-d:w-[300px] sm-d:mx-auto text-[15px] 2xl:text-[14px] mlg:text-[13px] xs:text-[12px] 2xl:leading-[25px] mlg:leading-[21px] leading-[30px]">
                            We follow all safety protocols to protect you and your loved ones. Our team is fully prepared with
                            vaccination drives and strict measures to ensure a safe and seamless service experience.
                        </p>
                        {/* <button className="w-[213px] h-[59px] bg-white text-black font-bold text-[20px] rounded-md">
                            More Videos
                        </button> */}
                    </div>

                    <div className="w-[626px] h-[417px] 2xl:!hidden">
                        <img src={vid} alt="videos here" className="w-full h-full object-cover rounded-lg" />
                        {/* <VideoBtn className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" /> */}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}
export default Videos;