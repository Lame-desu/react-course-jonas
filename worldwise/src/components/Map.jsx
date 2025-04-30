import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <div
      onClick={() => {
        navigate("form");
      }}
      className={styles.mapContainer}
    >
      Map {lat} {lng}
      <button
        onClick={() => {
          setSearchParam({ lat: 60, lng: 56 });
        }}
      >
        change location
      </button>
    </div>
  );
}

export default Map;
