import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

type companyMapprops = {
    position?: [number, number] | null
}

const MapUpdater: React.FC<{ position: [number, number] }> = ({ position }) => {

    const safePosition: [number, number] = position ?? [27.7172, 85.3240];
    const map = useMap();

    useEffect(() => {
        map.flyTo(safePosition, 15, {
            duration: 1.5, // Smooth transition
        });
    }, [safePosition, map]);

    return null;
};

const CompanyMap: React.FC<companyMapprops> = ({ position }) => {
    const safePosition: [number, number] = position ?? [27.7172, 85.3240];

    return (
        <MapContainer
            center={safePosition}
            zoom={15}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={safePosition}>
                <Popup>Office Location</Popup>
            </Marker>
            <MapUpdater position={safePosition} />
            <ZoomControl position="bottomright" />
        </MapContainer>
    )
}
export default CompanyMap;