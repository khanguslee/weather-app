import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

function Alert(props) {
  const { message } = props;
  return <div className="alert">{message}</div>;
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
