import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Add cities by clicking add cities button" />;

  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city, i) => (
          <CityItem city={city} key={i} />
        ))}
      </ul>
    </>
  );
}

export default CityList;
