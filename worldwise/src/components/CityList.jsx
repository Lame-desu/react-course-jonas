import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => {
        <CityItem city={city} />;
      })}
    </ul>
  );
}

export default CityList;
