
type props = {
    image: string,
    title: string,
}

const SearchNavCard: React.FC<props> = ({ image, title }) => {
    return (

        <div className="h-[340px] w-[279px] xl:h-[290px] m-d:h-[230px] m-d:w-[200px] xl:w-[250px]">
            <img src={image} alt="img" className='w-full h-[264px] xl:h-[236px] m-d:h-[170px] bg-cover' />
            <p className='font-semibold text-sm xl:text-xs text-[#FFFFFFCC] mt-1'>{title}</p>
        </div>
    )
}
export default SearchNavCard