import React from "react";
import axios from "axios";

import Main from "./Main";

function MainController() {
  const searchHandler = async (searchCity) => {
    const cityWeatherData = await axios.get(`/api/v1/weather/${searchCity}`);
    console.log(cityWeatherData);
  };
  return <Main searchHandler={searchHandler} />;
}

export default MainController;
