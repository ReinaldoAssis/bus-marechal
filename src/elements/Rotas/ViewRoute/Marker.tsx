import L from "leaflet";

const busMarker = new L.Icon({
  iconUrl: require("./marker.svg"),
  iconRetinaUrl: require("./marker.svg"),
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { busMarker };
