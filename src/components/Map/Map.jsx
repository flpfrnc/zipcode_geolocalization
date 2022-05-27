import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "react-toastify/dist/ReactToastify.min.css";
import LocalizationDetail from "../LocalizationDetail/LocalizationDetail";
import "./Map.css";

const Map = (props) => {  

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_API_KEY}`,
  });

  return (
    <div className="map">      
      {isLoaded ? (
          <GoogleMap
            mapContainerClassName="map__Container"
            center={{
              lat: props.latitude,
              lng: props.longitude,
            }}
            zoom={15}
          >
            <Marker
              position={{
                lat: props.latitude,
                lng: props.longitude,
              }}
              options={{
                label: {
                  text: "Posição aproximada ✨",
                  className: "map__marker",
                },
              }}
            />
          </GoogleMap>
      ) : (
        <></>
        )}
    </div>
  );
};

export default Map;
