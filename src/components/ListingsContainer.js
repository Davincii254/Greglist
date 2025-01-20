import React, { useEffect, useState } from "react"; 
// Imports necessary components from React library:
// - React: The core React library.
// - useEffect: Hook for performing side effects in functional components (fetching data in this case).
// - useState: Hook for managing component state (listings, sort criteria).

import ListingCard from "./ListingCard"; 
// Imports the ListingCard component for rendering individual listings.

import NewListingForm from "./NewListingForm"; 
// Imports the NewListingForm component for adding new listings.

function ListingsContainer({ search }) { 
  // Defines a functional React component named "ListingsContainer".
  // Accepts a prop named "search" containing the current search query.

  const [listings, setListings] = useState([]); 
  // Uses useState hook to create state variables:
  // - `listings`: An array to store the fetched listing data (initially empty).
  // - `setListings`: A function to update the value of the `listings` state.

  const [sortBy, setSortBy] = useState("id"); 
  // Uses useState hook to create a state variable:
  // - `sortBy`: A string representing the current sorting criteria (initially "id").
  // - `setSortBy`: A function to update the value of the `sortBy` state.

  useEffect(() => { 
    // Defines a side effect using useEffect hook.
    fetch("http://localhost:6001/listings") 
      // Fetches data from the server endpoint upon component mount.
      .then((r) => r.json()) 
      // Parses the JSON response from the server.
      .then((listings) => setListings(listings)); 
      // Updates the `listings` state with the fetched data.
  }, []); 
  // The empty dependency array `[]` ensures the effect runs only once after the component mounts.

  function handleDeleteListing(id) { 
    // Defines a function to handle listing deletion.
    const updatedListingsArray = listings.filter( 
      // Filters the `listings` array to exclude the listing with the matching ID.
      (listing) => listing.id !== id 
    );
    setListings(updatedListingsArray); 
    // Updates the `listings` state with the filtered array.
  }

  function handleAddListing(newListing) { 
    // Defines a function to handle adding a new listing.
    const updatedListingsArray = [newListing, ...listings]; 
    // Creates a new array with the new listing prepended to the existing listings.
    setListings(updatedListingsArray); 
    // Updates the `listings` state with the updated array.
  }

  const listingCards = listings 
    .filter((listing) => 
      // Filters listings based on the current search query (case-insensitive).
      listing.description.toLowerCase().includes(search.toLowerCase()) 
    )
    .sort((listingA, listingB) => { 
      // Sorts the listings based on the selected criteria.
      if (sortBy === "id") {
        return listingA.id - listingB.id; // Sorts by ID (ascending).
      } else {
        return listingA.location.localeCompare(listingB.location); // Sorts by location (alphabetical).
      }
    })
    .map((listingObj) => ( 
      // Maps each listing object to a ListingCard component.
      <ListingCard
        key={listingObj.id} // Provides a unique key for each card.
        listing={listingObj} // Passes the listing data to the ListingCard.
        onDeleteListing={handleDeleteListing} // Passes the delete function to the ListingCard.
      />
    ));

  return (
    <main>
      <NewListingForm onAddListing={handleAddListing} /> {/* Form for adding new listings */}
      <button onClick={() => setSortBy("id")}>Sort By Default (ID)</button> {/* Button to sort by ID */}
      <button onClick={() => setSortBy("location")}>Sort By Location</button> {/* Button to sort by location */}
      <ul className="cards">{listingCards}</ul> {/* Renders the listing cards */}
    </main>
  );
}

export default ListingsContainer;