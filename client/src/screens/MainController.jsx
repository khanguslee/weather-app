import React, { useState } from "react";
import axios from "axios";

import Main from "./Main";

function MainController() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    type: "warn",
  });

  const searchHandler = async (searchCity) => {
    try {
      const response = await axios.get(`/api/v1/weather/${searchCity}`);
      setWeatherData(response.data);
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
