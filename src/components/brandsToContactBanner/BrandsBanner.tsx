import { Link } from 'react-router-dom';
import truck from '../../assets/images/brands/truck.webp';

type props = {
    title: string,
    description: string,
    path: string
}

const BrandsBanner: React.FC<props> = ({ title, description, path }) => {
    return (
        <section className="w-full bg-[#40404014] p-[75px] sl2:h-[600px] flex items-center l-g:flex-col justify-between text-black">
            <div className="h-[258px] sm:!w-[400px] sm:!h-[250px] l-g:h-[200px] sl1:h-[180px]  w-[759px] gl3:w-[600px] l-g:text-center Flex-Col justify-between">
                <h1 className="font-bold text-[42px]  xs:leading-[30px]  gl3:text-[35px] sl1:!text-[24px] sl1:!leading-[30px] gl3:leading-[40px] leading-[60px] tracking-[0.01em]">{title}</h1>
                <p className="font-normal text-[15px] gl3:text-[14px] sl1:!text-[14px] gl3:leading-[22px] leading-[25px] tracking-[0.03em]">{description}
                </p>
                <Link to={path}>
                    <button className="Black-Square-Btn l-g:mx-auto gl3:w-[150px] sl1:!w-[120px] sl1:!h-[40px] border-none bg-black hover:bg-DarkGolden text-white">
                        Contact Us
                    </button>
                </Link>
            </div>
            <div className='w-[539px] h-[400px] sl1:w-[500px] sl1:h-[350px] sl2:w-[300px] sl2:h-[300px] sl2:mt-9'>
                <img src={truck} alt="truck" />
            </div>
        </section>
    )
}
export default BrandsBanner;