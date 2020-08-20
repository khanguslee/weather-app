import React from "react";
import PropTypes from "prop-types";

import "./MainWeatherCard.scss";

function MainWeatherCard(props) {
  const { city, country, temperature, weather } = props;
  const cityCountryHeader = city ? `${city}, ${country}` : "";
  const temperatureText = temperature ? `${temperature}°C` : "";
  return (
    <div className="mainWeatherContainer">
      <p>{cityCountryHeader}</p>
      <p className="temperatureResult">{temperatureText}</p>
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
