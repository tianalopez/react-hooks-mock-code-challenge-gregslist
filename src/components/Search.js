import React, {useState} from "react";

function Search({onSubmit}) {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchValue);
    setSearchValue("")
  }
  //function to grab value
  const handleChange = (e) => {
    setSearchValue((value) => e.target.value)
  }
  return (
      <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>

  );
}

export default Search;
