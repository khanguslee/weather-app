import React, { useState } from "react";
import axios from "axios";

import Main from "./Main";

function MainController() {
  const initialWeatherData = {
    city: "",
    country: "",
    temperature: null,
    pressure: 0,
    humidity: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    weather: {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  };
  const [weatherData, setWeatherData] = useState(initialWeatherData);
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
