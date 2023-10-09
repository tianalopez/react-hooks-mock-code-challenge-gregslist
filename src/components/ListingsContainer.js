import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchValue, sort, newListing}) {
  const [listings, setListings] = useState([]);
  const [deletedListingId, setDeletedListingId] = useState("");

  //update the listings for the newListing
  // useEffect(() => {
  //   if (newListing) {
  //     setListings((prevListings) => [...prevListings, newListing])
  //   }
  // }, [newListing])

  //fetch data
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(setListings)
    .catch(err => alert(err))
  },[])

  //handle the delete and update state
  const onHandleDelete = (deletedId) => {
    setDeletedListingId((id) => deletedId)
  }

  //change the listings state to filter and sort
  const visibleListings = listings.filter((listing) => (
    listing.id !== deletedListingId
  ))
  .filter((listing) => {
    const listingName = listing.description.toUpperCase()
    return listingName.includes(searchValue)
  })
  .sort((a,b) => {
    if (sort) {
      if (a.location.toUpperCase() < b.location.toUpperCase()) {
        return -1
      }
      if (a.location.toUpperCase() > b.location.toUpperCase()) {
        return 1
      }
      else {
        return 0
      }
    }
  })

  //render each listing card
  const renderListing = visibleListings.map((listing) => (
    <ListingCard onHandleDelete={onHandleDelete} key={listing.id} listing={listing} />
  ))

  return (
    <main>
      <ul className="cards">
        {renderListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
