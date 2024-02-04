import "./OppMap.scss";
import Header from "../../components/Header/Header";
import FooterNav from "../../components/FooterNav/FooterNav";
import FilterMenu from "../../components/FilterMenu/FilerMenu";
import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

function OppMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-1.72);
  const [lat, setLat] = useState(51.5);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <>
      <Header />
      <FilterMenu />
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container"></div>
      <FooterNav />
    </>
  );
}

export default OppMap;
