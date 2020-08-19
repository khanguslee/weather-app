import React from "react";

import InputSearch from "../components/InputSearch";

import "./Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="header">
        <h1>Weather</h1>
      </div>

      <div className="body"></div>

      <div className="footer">
        <InputSearch />
      </div>
    </div>
  );
}

export default Main;
