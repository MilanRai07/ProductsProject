import { ReactComponent as Location } from '../../assets/svg/location.svg';
import { ReactComponent as Call } from '../../assets/svg/call.svg';
import { ReactComponent as Clock } from '../../assets/svg/clock.svg';
import React, { Dispatch, lazy, SetStateAction, useEffect, useState } from "react";
import LocationDropDown from "./LocationDropDown";
import { LocationDetails } from "../../types/locations/LocationApiResponseType";

const CompanyMap = lazy(() => import('./CompanyMap'))

type props = {
    setSelectedProvince: Dispatch<SetStateAction<string>>,
    setSelectedDistrict: Dispatch<SetStateAction<string>>
    setSelectedMunicipality: Dispatch<SetStateAction<string>>,
    selectedDistrict: string,
    selectedProvince: string,
    selectedMunicipality: string,
    getLocations: LocationDetails[]
}

const LocationDetail: React.FC<props> = ({ setSelectedProvince,
    setSelectedDistrict,
    setSelectedMunicipality,
    selectedDistrict,
    selectedProvince,
    selectedMunicipality,
    getLocations
}) => {

    const [search, setSearch] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(getLocations.length > 0 ? getLocations[0] : null);
    const [queryMessage, setQueryMessage] = useState('');
    const [showDistrict, setShowDistrict] = useState(false)
    const [showProvince, setShowProvince] = useState(false);
    const [showMunicipal, setShowMunicipal] = useState(false)

    const Provinces = [...new Set(getLocations.map(locations => locations.province))];
    const Districts = [...new Set(getLocations.map(locations => locations.district))];
    const Municipalities = [...new Set(getLocations.map(locations => locations.municipality))]


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value); // Update the search term immediately
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            const searchFor = search.toLowerCase();
            const foundLocation = getLocations.find((item) =>
                item.district.toLowerCase().includes(searchFor) ||
                item.province.toLowerCase().includes(searchFor) ||
                item.municipality.toLowerCase().includes(searchFor)
            );
            if (foundLocation) {
                setSelectedLocation(foundLocation);
                setQueryMessage('')
                setSelectedDistrict('');
                setSelectedProvince('');
                setSelectedMunicipality('')

            } else {
                setSelectedLocation(getLocations[0]);
                setQueryMessage("Sorry We couldn't find the related office")
            }
        }, 800);
        return () => clearTimeout(debounce);
    }, [search]);
    useEffect(() => {
        setSearch('');
        const searchFunction = () => {
            let foundLocation = getLocations.find((item) => {
                return (
                    item.province.toLowerCase().includes(selectedProvince.toLowerCase()) &&
                    item.district.toLowerCase().includes(selectedDistrict.toLowerCase()) &&
                    item.municipality.toLowerCase().includes(selectedMunicipality.toLowerCase())
                );
            });
            if (foundLocation) {
                setSelectedLocation(foundLocation);
                setQueryMessage('')
            } else {
                setQueryMessage("Sorry We couldn't find the related office");

            }
        };
        searchFunction();
    }, [selectedProvince, selectedDistrict, selectedMunicipality]);

    const reset = () => {
        setSearch('');
        setQueryMessage('');
        setSelectedDistrict('');
        setSelectedProvince('');
        setSelectedMunicipality('')
    }

    return (
        <>
            <div className="w-full mt-6 relative z-0 mb-[500px] m1:min-h-[580px] xs:!min-h-[540px]">
                <h2 className="font-bold text-[25px]  m1:text-[22px] xs:!text-lg m1:leading-[50px] leading-[60px] tracking-[0.03em]">Find your Nearest office</h2>
                <div className="w-full text-end flex justify-end sl1:mt-5 sl1:justify-center">
                    <button className="Black-Square-Btn transition-all md:w-[170px] md:text-[14px]"
                        onClick={reset}
                    >Reset the search</button>
                </div>
                <div className="mt-7 w-full flex justify-between m1:flex-none
                m1:grid m1:gap-4 m1:grid-cols-1 absolute z-20">
                    {/* Province DropDown */}
                    <LocationDropDown
                        setShowField={setShowProvince}
                        showField={showProvince}
                        selectedField={selectedProvince}
                        lists={Provinces}
                        setSelectedField={setSelectedProvince}
                        placeHolder='Province'
                    />
                    {/* District DropDown */}
                    <LocationDropDown
                        setShowField={setShowDistrict}
                        showField={showDistrict}
                        selectedField={selectedDistrict}
                        lists={Districts}
                        setSelectedField={setSelectedDistrict}
                        placeHolder='District'
                    />
                    {/* Municipality DropDown */}
                    <LocationDropDown
                        setShowField={setShowMunicipal}
                        showField={showMunicipal}
                        selectedField={selectedMunicipality}
                        lists={Municipalities}
                        setSelectedField={setSelectedMunicipality}
                        placeHolder='Municipality'
                    />
                    <input type='text' className="Map-Input" placeholder="Search"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                {/* see message from the query, if we couldn't find any offices */}
                <p className="Loading absolute left-1/2 -translate-x-1/2 top-52 m1:top-[410px] text-center z-0 Loading">{queryMessage}</p>
                <div className="mt-10 w-full h-[310px] m1:h-auto p-8 xs:p-5 rounded-[10px] border absolute z-10 top-56 m1:!top-[430px]
                             border-[rgba(61, 61, 61, 0.1)] shadow-[0px_0px_4px_rgba(0,0,0,0.2)] flex l-g:flex-col-reverse items-center justify-between">
                    <div className="w-[450px] h-[250px] xs:h-[200px] p-6 flex flex-col justify-between m1:w-full m1:items-start xs:!px-0">
                        <div className="flex items-center justify-between gap-4 ">
                            <div>
                                <Location />
                            </div>
                            <h1 className='w-[411px] font-medium text-xs xs:text-[11px] leading-[14.52px] tracking-[0.04em]'>{selectedLocation?.address}</h1>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <Call />
                            </div>
                            <h1 className='w-[411px] font-medium text-xs xs:text-[11px] leading-[14.52px] tracking-[0.04em]'>{selectedLocation?.phone_no}</h1>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <Clock />
                            </div>
                            <h1 className='w-[411px] font-medium text-xs xs:text-[11px] leading-[14.52px] tracking-[0.04em]'>
                                {`${selectedLocation?.timing?.opening}-${selectedLocation?.timing?.closing}`}
                            </h1>
                        </div>
                    </div>
                    <div className="w-[490px] m1:w-full h-[253px] m1:h-80 xs:!h-72 rounded-[15px]">
                        <CompanyMap
                            position={
                                selectedLocation?.coordinates?.lat && selectedLocation?.coordinates?.long
                                    ? [Number(selectedLocation.coordinates.lat), Number(selectedLocation.coordinates.long)]
                                    : null
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LocationDetail;