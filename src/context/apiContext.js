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

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
