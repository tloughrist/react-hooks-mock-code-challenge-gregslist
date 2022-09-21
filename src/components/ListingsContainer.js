import React from "react";
import ListingCard from "./ListingCard";

let listingsArr = [];

function ListingsContainer({ searchTerm, isLoaded, listings }) {

  const filteredListings = searchTerm === undefined ? listings : listings.filter((listing) => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (typeof listings === "object") {
    listingsArr = filteredListings.map((listing) => <ListingCard key={listing.description} id={listing.id} description={listing.description} image={listing.image} location={listing.location}/>);
  }

  if (!isLoaded) {
    return <h3>Listings Loading...</h3>;
  } else {
    return (
      <main>
        <ul className="cards">
          {listingsArr}
        </ul>
      </main>
    );
  }
};

export default ListingsContainer;