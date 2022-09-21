import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(); 

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setIsLoaded(true);
      })
  }, []);

  function handleSearch(value) {
    return setSearchTerm(value);
  };

  return (
    <div className="app">
      <Header handleSearch={ handleSearch }/>
      <ListingsContainer searchTerm={searchTerm} listings={listings} isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
