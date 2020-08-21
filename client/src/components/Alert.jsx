import React from "react";
import PropTypes from "prop-types";

function Banner(props) {
  const { message } = props;
  return <div>{message}</div>;
}

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Banner;
