import React, {useState} from "react";
import Search from "./Search";

function Header({onSubmit, onSort, sort, onFormSubmit}) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  })
  //handle submit and fire PATCH
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:6001/listings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then((newObj) => onFormSubmit(newObj))
    .catch(err => alert(err))
    setFormData({
      description: "",
      image: "",
      location: "",
    })
  }

  //grab value of inputs
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmit={onSubmit} />
      <button onClick={onSort} >Sort Alphabetically by Location:
      {sort ? " ON" : " OFF"}
      </button>
      <div>
        <form className="searchbar" onSubmit={handleSubmit}>
          <label> <h4>Create New Listing</h4>
              <input value={formData.description} onChange={handleChange} name="description" placeholder="Input Description"></input>
              <input value={formData.image} onChange={handleChange} name="image" placeholder="Input Image Url"></input>
              <input value={formData.location} onChange={handleChange} name="location" placeholder="Input Location"></input>
              <button type="submit">Submit</button>
          </label>

      </form>
      </div>

    </header>
  );
}

export default Header;
