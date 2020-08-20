import React from "react";
import PropTypes from "prop-types";

function InfoWeatherCard(props) {
  const { humidity, pressure, rain, wind } = props;
  return (
    <div className="infoWeatherContainer">
      <p>Humidity: {humidity}%</p>
      <p>Pressure: {pressure} Pa</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      {rain && <p>Rain: {rain} mm</p>}
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
