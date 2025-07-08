import { Dispatch, SetStateAction } from "react";
import { ReactComponent as Drop } from '../../assets/svg/chevronLeft.svg';

type props = {
    setShowField: Dispatch<SetStateAction<boolean>>,
    showField: boolean,
    selectedField: string,
    lists: string[],
    setSelectedField: Dispatch<SetStateAction<string>>,
    placeHolder: string
}

const LocationDropDown: React.FC<props> = ({ setShowField, showField, selectedField, lists, setSelectedField, placeHolder }) => {
    return (
        <div className="relative w-[253px] 2xl:!w-[200px] xl:!w-[160px] m1:!w-full ">
            {/*Province Button */}
            <button
                onClick={() => setShowField(!showField)}
                className="Map-Button"
            >
                {selectedField ? selectedField : placeHolder}
                <Drop className="w-[20px] h-[20px] -rotate-90" />

            </button>

            {/*Province Menu */}
            {showField && (
                <div className="absolute left-0 mt-1 w-full bg-white border rounded-md shadow-lg z-30">
                    {lists.map((item, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelectedField(item);
                                setShowField(false);
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default LocationDropDown;