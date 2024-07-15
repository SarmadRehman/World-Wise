import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  //no contries in the list
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  //filtering out and storing the countries from the API /cities
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((e) => e.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  // displaying countries items
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
};

export default CountryList;
