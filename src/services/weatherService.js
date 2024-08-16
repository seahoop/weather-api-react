// src/services/weatherService.js
const API_KEY = '7dfe24c982c44c0092e194551241608';
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Fetch error:', err);
  }
};

export default { show };
