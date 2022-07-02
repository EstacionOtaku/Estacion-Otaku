import { useEffect, useState } from "react";
// import axios from "axios";

const url = process.env.REACT_APP_BASE_API_URL;

const useApiAnime = (path) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://${url}/${path}`);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    apiAnimes();
  }, []);

  return { data, error, loading };
};

export const useApiAnimeParam = (id, path) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(`https://${url}/${path}`);
        const data = await response.json();
        const animeSelected = data.filter((element) => element.id == id);
        setData(animeSelected);
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
