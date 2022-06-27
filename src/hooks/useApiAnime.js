import { useEffect, useState } from "react";
// import axios from "axios";

const useApiAnime = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = "https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1";

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        console.log(response);
        const fetchedData = await response.json();
        console.log(fetchedData);
        setData(fetchedData.results);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    apiAnimes();
  }, []);

  return { data, error, loading };
};

export default useApiAnime;
