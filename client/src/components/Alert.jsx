import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
  const { message } = props;
  return <div>{message}</div>;
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
