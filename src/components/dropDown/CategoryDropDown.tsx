import { Dispatch, SetStateAction, useState } from 'react';
import { ReactComponent as Drop } from '../../assets/svg/categoryDrop.svg';

type props = {
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    selected: string,
    options: string[],
    disabled: boolean,
    setCurrentPage: Dispatch<SetStateAction<number>>
}
const CategoryDropDown: React.FC<props> = ({ setSelected, selected, options, disabled, setCurrentPage }) => {

    const [showDrop, setShowDrop] = useState<boolean>(false)

    const handleSelect = (value: string) => {
        value == 'All' ? setSelected('Category') : setSelected(value)
        setShowDrop(false);
        setCurrentPage(1)
    };

    return (
        <div className="relative w-[300px]  ">
            <div className="relative w-full">

                <div className="w-[300px] as1:w-[400px]">
                    <div className="Select" onClick={() => !disabled ? setShowDrop(!showDrop) : setShowDrop(false)}>
                        <span className='text-[14px] x-l:text-[12px] sm-d:text-[10px] xs:text-[11px] leading-[40px] tracking-[0.05em]'>{selected || "Category"}</span>
                        <Drop className="w-[15px] h-[10px] x-l:w-[12px] x-l:h-[13px] sm-d:w-[10px] sm-d:h-[12px] xs:w-[10px] xs:h-[10px]" />
                    </div>
                    {
                        showDrop && !disabled && (
                            <div className="Category-Drop-Div">
                                {options.map((option) => (
                                    <div
                                        key={option}
                                        className="Category-Drop-Item cursor-pointer hover:bg-stone-600"
                                        onClick={() => handleSelect(option)}
                                    >
                                        <p className='px-7'>{option}</p>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default CategoryDropDown;