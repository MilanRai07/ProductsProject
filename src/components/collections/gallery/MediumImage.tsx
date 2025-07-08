type props = {
    img: string,
    title: string
}

const MediumImage: React.FC<props> = ({ img, title }) => {
    return (
        <div className="relative h-[220px] bg-black text-white rounded-lg overflow-hidden">
            <img src={img} alt="Bedroom" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <p className="absolute bottom-4 left-4 ">{title}</p>
        </div>
    )
}
export default MediumImage;