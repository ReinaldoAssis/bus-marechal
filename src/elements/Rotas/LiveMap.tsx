import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import busiconpng from "./ViewRoute/marker.png";

/*.leaflet-container {
  height: 500px;
  width: 600px;
} */

type LiveMapProps = {
  height?: number;
  width?: number;
  Style?: React.CSSProperties;
};

export default function LiveMap({ height, width, Style }: LiveMapProps) {
  function get_icon() {
    return L.icon({
      iconUrl: busiconpng,
      iconSize: [30, 30],
    });
  }

  return (
    <div style={{ height: height, width: width, ...Style }}>
      <MapContainer
        style={{ height: height, width: width, ...Style }}
        center={[-9.7229, -35.8683]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={get_icon()} position={[-9.74299, -35.88232]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
