import React from "react";
import PropTypes from "prop-types";

import InputSearch from "../components/InputSearch";
import MainWeatherCard from "../components/MainWeatherCard";
import InfoWeatherCard from "../components/InfoWeatherCard";
import Alert from "../components/Alert";

import "./Main.scss";

function Main(props) {
  const { searchHandler, data, alert } = props;

  const kelvinToCelsius = (inputTemp) => {
    return inputTemp - 273.15;
  };

  // TODO: Add ability to toggle between units
  const convertTemp = (inputTemp) => {
    return Math.round(kelvinToCelsius(inputTemp));
  };

  const temperatureData = data ? convertTemp(data.temperature) : undefined;

  return (
    <div className="container">
      <div className="header">
        <h1>Weather</h1>
      </div>

      <div className="body">
        {data && (
          <>
            <MainWeatherCard
              city={data.city}
              country={data.country}
              temperature={temperatureData}
              weather={data.weather}
            />

            <InfoWeatherCard
              humidity={data.humidity}
              pressure={data.pressure}
              rain={data.rain}
              wind={data.wind}
            />
          </>
        )}
      </div>

      <div className="footer">
        {alert.message && <Alert message={alert.message} type={alert.type} />}
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
  alert: PropTypes.object,
};

Main.defaultProps = {
  searchHandler: () => {},
  data: undefined,
  alert: { message: "", type: "warn" },
};

export default Main;
