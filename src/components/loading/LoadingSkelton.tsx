type props = {
    count: number,
}
const LoadingSkeleton: React.FC<props> = ({ count }) => {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div key={index} className="w-[220px] xl:w-[140px] lg:w-[100px] h-[310px] xl:!h-[200px]  x-l:!h-[160px] 
                                      sm-d:h-[130px] sm-d:w-[110px] bg-gray-300 animate-pulse duration-100 rounded-lg"></div>
            ))}
        </>
    )
}
export default LoadingSkeleton;