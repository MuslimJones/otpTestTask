import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../features/countriesSlice';

const CountriesList = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading === 'loading') {
    return <div>Loading...</div>;
  }

  if (loading === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='countries__container'>
      <h1>Countries List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3} className='country__item'>
            <span>Country: {country.name.common}</span>  
            <span>Capital: {country.capital}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;