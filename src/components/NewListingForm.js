import { useState } from "react"; 
// Imports the useState hook from React for managing component state.

function NewListingForm({ onAddListing }) { 
  // Defines a functional React component named "NewListingForm".
  // Accepts a prop named "onAddListing" - a function to call when a new listing is created.

  const [description, setDescription] = useState(""); 
  // Uses useState hook to create a state variable:
  // - `description`: Stores the user input for the listing description (initially empty string).
  // - `setDescription`: A function to update the value of the `description` state.

  const [image, setImage] = useState(""); 
  // Similar to `description`, stores the image URL entered by the user.

  const [location, setLocation] = useState(""); 
  // Similar to `description`, stores the listing location entered by the user.

  function handleSubmit(e) { 
    // Defines a function to handle the form submission.
    e.preventDefault(); 
    // Prevents the default form submission behavior (page refresh).

    const formData = { description, image, location }; 
    // Creates an object containing the listing data from the form fields.

    fetch("http://localhost:6001/listings", { 
      // Sends a POST request to the server endpoint to create a new listing.
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
      }, 
      // Sets the content type header to indicate JSON data in the request body.
      body: JSON.stringify(formData), 
      // Converts the listing data object to a JSON string and includes it in the request body.
    })
      .then((r) => r.json()) 
      // Parses the JSON response from the server (likely containing the newly created listing data).
      .then((newListing) => { 
        // Calls the `onAddListing` prop function, passing the newly created listing data.
        onAddListing(newListing); 
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for description, image URL, and location */}
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default NewListingForm;