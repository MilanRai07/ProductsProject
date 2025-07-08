import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { NepalGeoJson } from "../../localData/MapJson";
import { Dispatch, SetStateAction } from "react";
import { LocationDetails } from "../../types/locations/LocationApiResponseType";

const Icon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [20, 30],
});
type props = {
    setSelectedDistrict: Dispatch<SetStateAction<string>>;
    setSelectedProvince: Dispatch<SetStateAction<string>>;
    setSelectedMunicipality: Dispatch<SetStateAction<string>>;
    getLocations: LocationDetails[]
};
const NepalChoropleth: React.FC<props> = ({ setSelectedDistrict, setSelectedProvince, setSelectedMunicipality, getLocations }) => {

    const locations = getLocations
    const onEachProvince = (layer: any) => {

        if (layer && layer.setStyle) {

            layer.on({
                mouseover: (e: any) => {
                    e.target.setStyle({
                        fillColor: "#0056b3",
                        fillOpacity: 0.9,
                    });
                },
                mouseout: (e: any) => {
                    e.target.setStyle({
                        fillColor: "#007bff",
                        fillOpacity: 0.7,
                    });
                }
            });
        }
    };
    return (
        <MapContainer center={[28.3949, 84.1240]}
            zoom={7}
            scrollWheelZoom={false}
            dragging={false}
            className="w-full h-[600px] l-g:h-[500px] sl1:h-[400px] sl3:h-[350px]">

            <GeoJSON
                data={NepalGeoJson}
                style={() => ({
                    fillColor: "#007bff",
                    weight: 2,
                    color: "white",
                    fillOpacity: 0.7,
                })}
                onEachFeature={onEachProvince}
            />

            {/* Markers for Locations */}
            {locations.map((location) => (
                <Marker
                    key={location.id}
                    position={[
                        parseFloat(location.coordinates.lat),
                        parseFloat(location.coordinates.long)
                    ]}
                    icon={Icon}
                    eventHandlers={{
                        click: () => {
                            if (setSelectedProvince && setSelectedDistrict && setSelectedMunicipality) {
                                setSelectedProvince(location.province);
                                setSelectedDistrict(location.district);
                                setSelectedMunicipality(location.municipality);
                            }
                        }
                    }}

                >
                    <Popup>
                        <h2 className="font-bold">{location.province} - {location.municipality}</h2>
                        <p><b>District:</b> {location.district}</p>
                        <p><b>Address:</b> {location.address}</p>
                        <p><b>Phone:</b> {location.phone_no}</p>
                        <p><b>Timing:</b> {`${location.timing.opening}-${location.timing.closing}`}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default NepalChoropleth;
