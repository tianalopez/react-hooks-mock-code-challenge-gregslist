import React, {useState} from "react";

function ListingCard({listing, onHandleDelete}) {
  const [favorite, setFavorite] = useState(false)

  //function to change like
  const handleFavorite = () => {
    setFavorite((status) => !status)
  }

  //function to handle Delete
  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .catch(err => alert(err))
    onHandleDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div onClick={handleFavorite}className="details">
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
