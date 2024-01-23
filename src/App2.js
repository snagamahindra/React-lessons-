import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch request to your API endpoint
        const response = await fetch("http://example.com/movies.json");

        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the response data
        const result = await response.json();

        // Set the data in the state
        setData(result);
        setLoading(false);
      } catch (error) {
        // Handle errors
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div className="container p-5">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DataFetchingComponent;
