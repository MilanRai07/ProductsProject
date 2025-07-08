import { ReactComponent as Search } from '../../assets/svg/search.svg';
import React, { Dispatch, SetStateAction, useRef } from 'react';

type props = {
    setSearchParam: Dispatch<SetStateAction<string>>
    disabled?: boolean
}
const CategorySearch: React.FC<props> = ({ setSearchParam, disabled }) => {

    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        if (searchInputRef.current) {
            setSearchParam(searchInputRef.current.value);
        }
    };
    return (
        <div className="flex items-center  rounded-[100px] bg-[#40404080] px-7 sl3:px-5 py-2 cursor-pointe w-[300px] h-[46px] x-l:h-[40px] sm-d:h-[35px] xs:h-[30px] x-l:w-[230px] sm-d:w-[200px]
       sl2:w-[150px] xs:w-[170px] sl3:w-[120px]">
            <Search className="h-[13px] w-[13px] cursor-pointer" onClick={handleSearch} />
            <input
                type="text"
                placeholder="Search"
                disabled={disabled}
                className="w-full h-full bg-transparent text-[#FFFFFFB2]/70 text-[14px] x-l:text-[12px] sm-d:text-[10px] xs:text-[11px] leading-[40px] tracking-[0.05em] px-3 outline-none"
                ref={searchInputRef}
            />
        </div>
    );
};

export default CategorySearch;
