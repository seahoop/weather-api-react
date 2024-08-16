// src/components/WeatherDetails.jsx
const WeatherDetails = (props) => {
    return (
      <section>
        <h2>Weather Details</h2>
        <p>Location: {props.weather.location}</p>
        <p>Temperature: {props.weather.temperature}°F</p>
        <p>Condition: {props.weather.condition}</p>
      </section>
    );
  };
  
  export default WeatherDetails;
  