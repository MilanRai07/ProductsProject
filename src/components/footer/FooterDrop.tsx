import React, { Dispatch, SetStateAction } from "react";
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import { NavLink } from "react-router-dom";

type props = {
    lists: { name: string, path: string }[] | null,
    setShowDrop: Dispatch<SetStateAction<boolean>>,
}
const FooterDrop: React.FC<props> = ({ lists, setShowDrop }) => {
    return (
        <div className="bg-white border-[0.5px] border-black/50 rounded-[15px] w-full p-6 h-auto text-black ">
            <div className='flex w-full justify-end items-center mb-5'>
                <Cross className='w-[30px] h-[30px] stroke-black'
                    onClick={() => setShowDrop(false)}
                />
            </div>
            <ul className="Flex-Col gap-7 sm-d:gap-6 xs:gap-4 list-none h-auto mb-5">
                {
                    lists?.map((item, index) => {
                        const { name, path } = item;
                        return (
                            <li key={index} className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                                onClick={() => setShowDrop(false)}
                            >
                                <NavLink to={path} className='Nav-Item xs:text-[12px]  sm:text-[13px] text-black'>{name}</NavLink>

                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}
export default FooterDrop;