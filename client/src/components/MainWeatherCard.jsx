import React from "react";
import PropTypes from "prop-types";

import "./MainWeatherCard.scss";

function MainWeatherCard(props) {
  const { city, country, temperature, weather } = props;
  const cityCountryHeader = city ? `${city}, ${country}` : "";
  const temperatureText = temperature ? `${temperature}°C` : "";
  return (
    <div className="mainWeatherContainer">
      <p data-testid="city-country-text">{cityCountryHeader}</p>
      <div className="temperatureResult">
        {weather.icon && (
          <img
            data-testid="weather-icon"
            alt={weather.description}
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          />
        )}
        <p data-testid="temperature-text">{temperatureText}</p>
      </div>

      <p data-testid="weather-description-text">{weather.main}</p>
    </div>
  );
}

MainWeatherCard.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  weather: PropTypes.object,
};

MainWeatherCard.defaultProps = {
  city: "",
  country: "",
  temperature: "",
  weather: "",
};

export default MainWeatherCard;
