import React, { useState } from "react";

function ListingCard({ id, description, image, location}) {

  const [favorite, setFavorite] = useState(false)
  
  function handleFavorite() {
    return setFavorite(!favorite);
  }

  function handleDelete(e) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method:"DELETE"
    });
    return e.target.parentNode.parentNode.remove();
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={`${image}`} alt={`${description}`} />
      </div>
      <div className="details">
        {favorite? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{`${description}`}</strong>
        <span> · {`${location}`}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
