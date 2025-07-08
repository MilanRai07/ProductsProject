
type props = {
    img: string,
    title: string
}
const ExploreCard: React.FC<props> = ({ img, title }) => {
    return (
        <div className="w-[257px]  h-[353px] l-g:h-[300px] md:w-[200px] md:!h-[250px] Flex-Col justify-between cursor-grab !bg-transparent">
            <div className="w-full h-[315px] overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover hover:scale-105 transition " />
            </div>
            <p className="text-[#3D3D3D] font-medium text-base tracking-2%">{title}</p>
        </div>
    )
}
export default ExploreCard;