import React from "react"; 
// Imports the necessary React library.

import Search from "./Search"; 
// Imports the Search component from a separate file.

function Header({ onSearch }) { 
  // Defines a functional React component named "Header".
  // Accepts a prop named "onSearch" which is a function.

  return ( 
    // JSX syntax to define the structure of the component.
    <header> 
      {/* Renders a heading (<h1>) element. */}
      <h1> 
        {/* Renders a span element with a peace symbol as a logo. */}
        <span className="logo" role="img"> 
          ☮ 
        </span>
        {/* Renders the text "gregslist" */}
        gregslist 
      </h1>
      {/* Renders the Search component and passes the `onSearch` prop to it. */}
      <Search onSearch={onSearch} /> 
    </header>
  );
}

export default Header; 
// Exports the Header component as the default export of this module.