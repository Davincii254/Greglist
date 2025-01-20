import React, { useState } from "react"; 
// Imports necessary components from React library:
// - React: The core React library.
// - useState: Hook for managing component state (the current search query in this case).

function Search({ onSearch }) { 
  // Defines a functional React component named "Search".
  // Accepts a prop named "onSearch" - a function to call with the updated search query.

  const [currentSearch, setCurrentSearch] = useState(""); 
  // Uses useState hook to create a state variable:
  // - `currentSearch`: Stores the current search query entered by the user (initially empty string).
  // - `setCurrentSearch`: A function to update the value of the `currentSearch` state.

  function handleSubmit(e) { 
    // Defines a function to handle the form submission.
    e.preventDefault(); 
    // Prevents the default form submission behavior (page refresh).
    onSearch(currentSearch); 
    // Calls the `onSearch` prop function, passing the current search query.
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      {/* Search input field */}
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch} 
        // Binds the current search query state to the input value.
        onChange={(e) => setCurrentSearch(e.target.value)} 
        // Updates the `currentSearch` state on user input changes.
      />
      <button type="submit">🔍</button> 
      {/* Submit button with a magnifying glass emoji */}
    </form>
  );
}

export default Search;