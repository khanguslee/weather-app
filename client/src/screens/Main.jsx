import React from "react";
import PropTypes from "prop-types";

import InputSearch from "../components/InputSearch";

import "./Main.scss";

function Main(props) {
  const { searchHandler } = props;
  return (
    <div className="container">
      <div className="header">
        <h1>Weather</h1>
      </div>

      <div className="body"></div>

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
