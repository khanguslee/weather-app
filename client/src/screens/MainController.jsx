import React, { useState } from "react";
import axios from "axios";

import useAlert from "../hooks/useAlert";
import Main from "./Main";

function MainController() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [alertMessage, setAlertMessage, resetAlert] = useAlert();

  const searchHandler = async (searchCity) => {
    try {
      const response = await axios.get(`/api/v1/weather/${searchCity}`);
      if (response.data) {
        resetAlert();
        setWeatherData(response.data);
      } else {
        setAlertMessage(`${searchCity} was not found`, "warn");
      }
    } catch (err) {
      // TODO: Display error banner
      setAlertMessage("Error retrieving city", "warn");
    }
  };

  return (
    <Main
      searchHandler={searchHandler}
      data={weatherData}
      alert={alertMessage}
    />
  );
}

export default MainController;
