type PillTitleProps = {
    titleName: string
}
const PillTitle: React.FC<PillTitleProps> = ({ titleName }) => {
    return (
        <div className="text-black Flex-Center gap-5 sl4:gap-1  sl4:w-[170px] w-[250px] lg:w-[220px] xl:h-[40px] h-[50px] bg-[#D9D9D9] rounded-[50px] m-auto 
        font-bold text-xl xl:text-lg lg:text-base xs:text-[15px] leading-[30px] tracking-4%">
            <div className="w-[19px] h-[19px] rounded-full bg-Golden"></div>
            <h1>{titleName}</h1>
            <div className="w-[19px] h-[19px] rounded-full bg-Golden"></div>
        </div>
    )
}
export default PillTitle