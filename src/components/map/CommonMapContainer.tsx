import { useState } from "react";
import LocationDetail from "./LocationDetail";
import NepalChoropleth from "./NepalChoropleth";
import { LocationDetails } from "../../types/locations/LocationApiResponseType";


type props = {
    title: string,
    getLocations: LocationDetails[],
    isFetching: boolean,
    isError: boolean
}
const CommonMapContainer: React.FC<props> = ({ title, getLocations, isFetching, isError }) => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedMunicipality, setSelectedMunicipality] = useState("");

    const toLocationProps = {
        setSelectedProvince,
        setSelectedDistrict,
        setSelectedMunicipality,
        selectedDistrict,
        selectedProvince,
        selectedMunicipality,
        getLocations
    }

    if (isFetching) {
        return (
            <div className="Loading w-full  text-center mt-6 relative z-0 mb-[500px] m1:min-h-[580px] xs:!min-h-[540px]">The Locations are Loading. Please Wait...</div>
        )
    }
    if (isError) {
        return (
            <div className="Loading w-full  text-center mt-6 relative z-0 mb-[500px] m1:min-h-[580px] xs:!min-h-[540px]">We could not find any locations at the moment...</div>
        )
    }
    if (getLocations.length === 0) {
        return (
            <div className="Loading w-full text-center mt-6 relative z-0 mb-[500px] m1:min-h-[580px] xs:!min-h-[540px]">Sorry there are no any location available right now...</div>
        )
    }
    return (
        <div>
            <h1 className="font-bold text-[25px] m1:text-[22px] xs:!text-lg m1:leading-[50px] leading-[60px] tracking-[0.03em]">{title}</h1>
            <NepalChoropleth
                setSelectedProvince={setSelectedProvince}
                setSelectedDistrict={setSelectedDistrict}
                setSelectedMunicipality={setSelectedMunicipality}
                getLocations={getLocations}
            />
            <LocationDetail {...toLocationProps}
            />
        </div >
    )
}
export default CommonMapContainer;