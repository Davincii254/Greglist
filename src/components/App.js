import React, { useState } from "react"; 
// Imports necessary components from React library:
// - React: The core React library.
// - useState: Hook for managing component state (in this case, the search query).

import Header from "./Header"; 
// Imports the Header component from a separate file.

import ListingsContainer from "./ListingsContainer"; 
// Imports the ListingsContainer component from a separate file.

function App() { 
  // Defines a functional React component named "App".

  const [search, setSearch] = useState(""); 
  // Uses the useState hook to create a state variable:
  // - `search`: Stores the current search query (initially an empty string).
  // - `setSearch`: A function to update the value of the `search` state.

  function handleSearch(newSearch) { 
    // Defines a function to handle search input changes.
    setSearch(newSearch); 
    // Updates the `search` state with the new search query.
  }

  return ( 
    // JSX syntax to define the structure of the component.
    <div className="app"> 
      {/* Renders the Header component and passes the `handleSearch` function as a prop. */}
      <Header onSearch={handleSearch} /> 
      {/* Renders the ListingsContainer component and passes the `search` state as a prop. */}
      <ListingsContainer search={search} /> 
    </div>
  );
}

export default App; 
// Exports the App component as the default export of this module.