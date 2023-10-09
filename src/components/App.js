import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [sort, setSort] = useState(false)
  const [newListing, setNewListing] = useState({})

  //grab value of submission
  const onSubmit = (formValue) => {
    const fixedValue = formValue.toUpperCase()
    setSearchValue((value) => fixedValue)
  }
  //set sort value
  const onSort = () => {
    setSort((status) => !status)
  }
  //grab new obj
  const onFormSubmit = (formData) => {
    setNewListing({...newListing, formData})
  }

  return (
    <div className="app">
      <Header onSubmit={onSubmit} onSort={onSort} sort={sort} onFormSubmit={onFormSubmit}/>
      <ListingsContainer searchValue={searchValue} sort={sort} newListing={newListing}/>
    </div>
  );
}

export default App;
