import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

function Alert(props) {
  const { message, type } = props;

  return <div className={`alert ${type}`}>{message}</div>;
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["warning", "error"]),
};

export default Alert;
