import React from "react";
import PropTypes from "prop-types";

import "./InputSearch.scss";

function InputSearch(props) {
  const { placeholder } = props;
  return (
    <form className="inputContainer">
      <input type="text" placeholder={placeholder} />
      <button type="submit">Search</button>
    </form>
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string,
};

InputSearch.defaultProps = {
  placeholder: "",
};

export default InputSearch;
