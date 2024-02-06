import "./OppMap.scss";
import Header from "../../components/Header/Header";
import FooterNav from "../../components/FooterNav/FooterNav";
import FilterMenu from "../../components/FilterMenu/FilerMenu";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

function OppMap() {
  const apiUrl = process.env.REACT_APP_URL;
  const port = process.env.REACT_APP_PORT;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-0.12);
  const [lat, setLat] = useState(51.45);
  const [zoom, setZoom] = useState(10);
  const [allOpportunities, setAllOpportunities] = useState(null);

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/opportunities`);
      setAllOpportunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/alex9595/cls92x1um01b201pl90gg0i2n",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    // map.current.on("click", (event) => {
    //   // If the user clicked on one of your markers, get its information.
    //   const features = map.current.queryRenderedFeatures(event.point, {
    //     layers: ["seed-data"], // replace with your layer name
    //   });
    //   if (!features.length) {
    //     return;
    //   }
    //   const feature = features[0];
    //   console.log(feature);

    //   // Code from the next step will go here.
    //   const popup = new mapboxgl.Popup({ offset: [0, -15] })
    //     .setLngLat(feature.geometry.coordinates)
    //     .setHTML(
    //       `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    //     );
    //   // Log the map object to the console to verify its structure
    //   console.log(map);

    //   // Check if the map is valid before adding the popup
    //   if (map && typeof map.addControl === "function") {
    //     popup.addTo(map);
    //   }
    // });
    map.current.on("click", (event) => {
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["seed-data"], // replace with your layer name
      });

      if (!features.length) {
        return;
      }

      const feature = features[0];

      // Code from the next step will go here.
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        );

      if (map.current && typeof map.current.addControl === "function") {
        popup.addTo(map.current);
      }
    });
    fetchOpportunities();
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
