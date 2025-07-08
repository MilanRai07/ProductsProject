import { ReactComponent as Star } from '../../assets/svg/star.svg';

type Props = {
    img: string;
    name: string;
    text: string;
    star: number;
    index: number;
};

const TestimonialCard: React.FC<Props> = ({ img, name, text, star, index }) => {
    return (
        <div
            className="min-w-[280px] sm:min-w-[240px] max-w-[330px] h-auto py-7 rounded-[30px] bg-[#404040] Flex-Col items-center justify-center p-5 relative shadow-md"
            style={{
                borderRadius:
                    index === 0
                        ? '0px 30px 0px 30px'
                        : index === 1
                            ? '30px 0px 30px 0px'
                            : '0px 30px 0px 30px',
            }}
        >
            <div className="mt-12 w-[80px] h-[80px] sm:w-[60px] sm:h-[60px] rounded-full bg-white absolute -top-10 sm:-top-8 overflow-hidden">
                {
                    img !== ''? (
                        <img src={img} alt={name} className="w-full h-full object-cover" />
                    ):(
                        <div className='w-full h-full bg-slate-300'></div>
                    )
                }
            </div>
            <div className="mt-20 text-white text-center w-full border-b border-white/50 pb-5">
                <h1 className="font-bold text-lg sm:text-base">{name}</h1>
                <p className="text-[12px] leading-[18px] mt-1">{text}</p>
            </div>
            <div className="mt-6 flex gap-2">
                {[...Array(star)].map((_, i) => (
                    <Star key={i} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCard;
