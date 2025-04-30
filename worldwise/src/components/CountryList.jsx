import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Add cities by clicking add cities button" />;

  let countries = cities.reduce((arr, city) => {
    if (!arr.some((c) => c.country === city.country)) {
      arr.push(city);
    }
    return arr;
  }, []);

  return (
    <>
      <ul className={styles.countryList}>
        {countries.map((country, i) => (
          <CountryItem country={country} key={i} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;
