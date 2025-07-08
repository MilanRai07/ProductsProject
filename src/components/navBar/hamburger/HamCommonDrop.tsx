import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from '../../../assets/svg/cross.svg';
import { ReactComponent as Back } from '../../../assets/svg/blackBack.svg';
import { Dispatch, SetStateAction } from 'react';

type props = {
    lists: { name: string; path: string }[];
    setShowHamMenu: Dispatch<SetStateAction<boolean>>
    setShowHam: Dispatch<SetStateAction<boolean>>
}
const HamCommonDrop: React.FC<props> = ({ lists, setShowHam, setShowHamMenu }) => {
    return (
        <div className="bg-white border-[0.5px] border-black/50 rounded-[15px] w-full p-6 h-auto text-black ">
            <div className='flex w-full justify-between items-center mb-5'>
                <Back className="w-[20px] h-[20px]"
                    onClick={() => {
                        setShowHamMenu(false)
                        setShowHam(true)
                    }}
                />
                <Cross className='w-[30px] h-[30px] stroke-black'
                    onClick={() => {
                        setShowHam(false)
                        setShowHamMenu(false)
                    }} />
            </div>
            <ul className="Flex-Col gap-7 sm-d:gap-6 xs:gap-4 list-none h-auto mb-5">
                {
                    lists.map((item, index) => {
                        const { name, path } = item;
                        return (
                            <li key={index} className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                            >
                                <NavLink to={path} className='Nav-Item xs:text-[12px] text-black'>{name}</NavLink>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}
export default HamCommonDrop