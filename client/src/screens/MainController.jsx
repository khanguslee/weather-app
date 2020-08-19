import React, { useState } from "react";
import axios from "axios";

import Main from "./Main";

function MainController() {
  const [weatherData, setWeatherData] = useState({});
  const searchHandler = async (searchCity) => {
    try {
      const response = await axios.get(`/api/v1/weather/${searchCity}`);
      setWeatherData(response.data);
    } catch (err) {
      // TODO: Display error banner
      console.error(err);
    }
  };

  return <Main searchHandler={searchHandler} data={weatherData} />;
}

export default MainController;
