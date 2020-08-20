import React, { useState } from "react";
import PropTypes from "prop-types";

import "./InputSearch.scss";

function InputSearch(props) {
  const [searchText, setSearchText] = useState("");
  const { placeholder, onSubmitHandler } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitHandler(searchText);
  };

  return (
    <form className="inputContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  onSubmitHandler: PropTypes.func,
};

InputSearch.defaultProps = {
  placeholder: "",
  onSubmitHandler: () => {},
};

export default InputSearch;
