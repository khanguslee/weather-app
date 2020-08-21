import React, { useState } from "react";
import axios from "axios";

import Main from "./Main";

function MainController() {
  const [weatherData, setWeatherData] = useState(undefined);

  const initialAlertMessage = {
    message: "",
    type: "warn",
  };
  const [alertMessage, setAlertMessage] = useState(initialAlertMessage);

  const resetAlert = () => {
    setAlertMessage(initialAlertMessage);
  };

  const searchHandler = async (searchCity) => {
    try {
      const response = await axios.get(`/api/v1/weather/${searchCity}`);
      if (response.data) {
        resetAlert();
        setWeatherData(response.data);
      } else {
        setAlertMessage({
          message: `${searchCity} was not found`,
          type: "warn",
        });
      }
    } catch (err) {
      // TODO: Display error banner
      setAlertMessage({ message: "Error retrieving city", type: "warn" });
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
