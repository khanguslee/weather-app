import React from "react";
import PropTypes from "prop-types";

import InputSearch from "../components/InputSearch";
import MainWeatherCard from "../components/MainWeatherCard";

import "./Main.scss";

function Main(props) {
  const { searchHandler, data } = props;

  const kelvinToCelsius = (inputTemp) => {
    return inputTemp - 273.15;
  };

  // TODO: Add ability to toggle between units
  const convertTemp = (inputTemp) => {
    return Math.round(kelvinToCelsius(inputTemp));
  };

  const temperatureData =
    data.temperature != null ? convertTemp(data.temperature).toString() : "";

  return (
    <div className="container">
      <div className="header">
        <h1>Weather</h1>
      </div>

      <div className="body">
        <MainWeatherCard
          city={data.city}
          country={data.country}
          temperature={temperatureData}
          weather={data.weather}
        />
      </div>

      <div className="footer">
        <InputSearch
          placeholder={"Enter city and country"}
          onSubmitHandler={searchHandler}
        />
      </div>
    </div>
  );
}

Main.propTypes = {
  searchHandler: PropTypes.func,
  data: PropTypes.object,
};

Main.defaultProps = {
  searchHandler: () => {},
  data: {},
};

export default Main;
