import img1 from '../../../assets/images/mergeImages/collection1.webp'
import img2 from '../../../assets/images/mergeImages/collection2.webp'
import img3 from '../../../assets/images/mergeImages/collection3.webp'
import BigImage from './BigImage'
import SmallImage from './SmallImage'

const Gallery2: React.FC = () => {
    return (
        <div className=" bg-white mb-10 w-full flex sl2:flex-wrap justify-between gap-4 sl2:h-auto h-[460px] xl:h-[300px] p-4 font-semibold text-[20px] leading-[30px] tracking-2%">
        {/* Left Section */} 
        <div className="relative rounded-lg flex-grow overflow-hidden group">
            <BigImage img={img3} title='Living Room' />
        </div>

        {/* Right Section (Main Image) */}

        <div className=" w-96 xl:w-64 m-d:w-44 sl2:w-full flex flex-col gap-4">
            <SmallImage img={img1} title='Bedroom' />
            <SmallImage img={img2} title='Dining' />
            <SmallImage img={img3} title='Living Room' />
        </div>
    </div>
    )
}
export default Gallery2;