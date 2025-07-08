type props = {
    img: string,
    title: string
}
const BigImage: React.FC<props> = ({ img, title }) => {
    return (
        <>
            <img src={img} alt="Living Room Interior" className="w-full h-full object-cover" />
            <div className='w-full h-full bg-[#0000004D] absolute inset-0 opacity-0 group-hover:opacity-100 z-10 transition-all duration-500'></div>
            <p className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 z-20 transition-all duration-500">{title}</p>
        </>
    )
}
export default BigImage;