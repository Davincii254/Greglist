import React, { useState } from "react"; 
// Imports necessary components from React library:
// - React: The core React library.
// - useState: Hook for managing component state (in this case, whether the listing is favorited).

function ListingCard({ listing, onDeleteListing }) { 
  // Defines a functional React component named "ListingCard".
  // Accepts two props:
  // - `listing`: An object containing details about the listing (id, image, description, location).
  // - `onDeleteListing`: A function to be called when the listing is deleted.

  const [isFavorited, setIsFavorited] = useState(false); 
  // Uses the useState hook to create a state variable:
  // - `isFavorited`: A boolean indicating whether the listing is currently favorited (initially false).
  // - `setIsFavorited`: A function to update the value of the `isFavorited` state.

  const { id, image, description, location } = listing; 
  // Destructures the `listing` prop to access individual properties.

  function handleDelete() { 
    // Defines a function to handle the deletion of the listing.
    fetch(`http://localhost:6001/listings/${id}`, { 
      // Sends a DELETE request to the server to delete the listing.
      method: "DELETE", 
    })
      .then((r) => r.json()) 
      // Handles the response from the server (in this case, simply extracts the JSON data).
      .then(() => { 
        // Calls the `onDeleteListing` prop function, passing the listing's ID.
        onDeleteListing(id); 
      });
  }

  return ( 
    // JSX syntax to define the structure of the listing card.
    <li className="card"> 
      <div className="image"> 
        {/* Displays the price (placeholder: "$0") */}
        <span className="price">$0</span> 
        {/* Displays the listing image */}
        <img src={image} alt={description} /> 
      </div>
      <div className="details"> 
        {/* Renders a button to toggle the "favorited" state */}
        {isFavorited ? ( 
          // If the listing is favorited, render a button with a filled star.
          <button
            onClick={() => setIsFavorited(false)} 
            className="emoji-button favorite active" 
          >
            ★ 
          </button>
        ) : ( 
          // If the listing is not favorited, render a button with an empty star.
          <button
            onClick={() => setIsFavorited(true)} 
            className="emoji-button favorite" 
          >
            ☆ 
          </button>
        )}
        {/* Displays the listing description */}
        <strong>{description}</strong> 
        {/* Displays the listing location */}
        <span> · {location}</span> 
        {/* Renders a button to delete the listing */}
        <button onClick={handleDelete} className="emoji-button delete"> 
          🗑 
        </button>
      </div>
    </li>
  );
}

export default ListingCard; 
// Exports the ListingCard component as the default export of this module.