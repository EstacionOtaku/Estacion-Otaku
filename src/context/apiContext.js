import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

function APIContextProvider({ children }) {
  // Initialize state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    let url = "../db.json";
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.machines);
        setIsLoading(false);
        console.log(response.data.machines);
      })
      .catch((error) => console.log(error));
  }, []);

  return <APIContext.Provider value={{ data, isLoading }}>{children}</APIContext.Provider>;
}

export default APIContextProvider;

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

// List.js

// const FetchData = () => {
// Grab data from useAPI in global context
//  const { data, isLoading } = useAPI();

//  return (
//    <div>{!isLoading ? <p>{data[0].category}</p> : <p>Loading...</p>}</div>
//  );
// };

/***
 * Todo:
 * Embla Carousel
 * Implement apiContext for fetching data
 * Connect with RenderUI
 * Switcher for different categories
 *
 *
 * Anime page design
 * Category page
 * Start Page
 * Card component
 * ? How to implement server side rendering in create-react-app
 *
 *
 */
