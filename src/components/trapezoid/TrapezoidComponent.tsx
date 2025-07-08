// import { ReactComponent as Shape } from '../../assets/svg/trapezoid.svg';

// type props = {
//     base: string,
//     current: string
//     fill: string
//     color: string
// }
// const TrapezoidComponent: React.FC<props> = ({ base, current, fill, color }) => {
//     return (
//         <div className="relative h-[48px] sm-d:h-[40px] xs:h-[34px] min-w-[230px] flex items-center justify-center">
//             <Shape className='absolute x-10 top-0 left-0 h-full w-full'
//                 style={{
//                     fill: fill
//                 }}
//             />
//             <span className="text-[12px] sm-d:text-[10px] xs:text-[8px] leading-[18px] px-10 tracking-7% font-medium absolute z-20"
//                 style={{
//                     color: color
//                 }}
//             >
//                 {`${base} ▶ ${current}`}
//             </span>
//         </div>
//     )
// }
// export default TrapezoidComponent;