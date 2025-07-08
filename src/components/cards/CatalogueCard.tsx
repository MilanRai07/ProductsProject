
type props = {
    image: string,
    title: string
}
const CatalogueCard: React.FC<props> = ({ image, title }) => {
    return (
        <div className="w-[250px] 3xl:w-[220px] h-[286px] 3xl:h-[240px] 2x-l:w-[230px] 2x-l:h-[210px] gl5:!w-[220px] gl5:h-[190px] sm:!w-[200px] sm:!h-[190px] sl2:!w-[180px] sl2:!h-[180px] rounded-[5px] border border-white overflow-hidden relative group cursor-pointer">
            <img src={image} alt={title} className='w-full h-full object-cover absolute z-10' />
            <p className='font-bold text-[23px] 2xl:text-[18px] gl5:text-[17px] sm:text-[15px] sl2:text-[14px] leading-[55px] z-30 text-white Absolute-Center opacity-0 group-hover:opacity-100 transition'>{title}</p>
            <div className='w-full h-full bg-[#000000B2] z-20 absolute opacity-0 group-hover:opacity-100 transition'></div>
        </div>
    )
}
export default CatalogueCard;