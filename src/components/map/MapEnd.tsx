import { ReactComponent as Building } from '../../assets/svg/building.svg';
import { ReactComponent as Pack } from '../../assets/svg/package.svg';
import { ReactComponent as Globe } from '../../assets/svg/globe.svg';

const MapEnd: React.FC = () => {
    return (
        <section className="py-40 text-black flex justify-center gap-32 sm:gap-20 sl3:flex-wrap ">
            <div className='Flex-Col items-center justify-between h-[150px]'>
                <Building />
                <div className='text-center'>
                    <p className='End-Big'>
                        25
                        <span className='End-Small'>
                            Years
                        </span>
                    </p>
                    <p className='End-Small'>Experience</p>
                </div>
            </div>
            <div className='Flex-Col items-center justify-between h-[150px]'>
                <Pack />
                <div className='text-center'>
                    <p className='End-Big'>2000</p>
                    <p className='End-Small'>Products</p>
                </div>
            </div>
            <div className='Flex-Col items-center justify-between h-[150px]'>
                <Globe />
                <div className='text-center'>
                    <p className='End-Big'>+5</p>
                    <p className='End-Small'>Countries</p>
                </div>
            </div>
        </section>
    )
}
export default MapEnd;