import React from "react";
import PropTypes from "prop-types";

import "./InfoWeatherCard.scss";

function InfoWeatherCard(props) {
  const { humidity, pressure, rain, wind } = props;
  return (
    <div className="infoWeatherContainer">
      <p data-testid="humidity-text">Humidity: {humidity}%</p>
      <p data-testid="pressure-text">Pressure: {pressure} Pa</p>
      <p data-testid="wind-speed-text">Wind Speed: {wind.speed} m/s</p>
      {rain && <p data-testid="rain-text">Rain: {rain} mm</p>}
    </div>
  );
}

InfoWeatherCard.propTypes = {
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  rain: PropTypes.number,
  wind: PropTypes.object,
};
export default InfoWeatherCard;
