import { useEffect, useState } from "react";
// import axios from "axios";

const url = "https://api.jsonbin.io/b/6250d0207b69e806cf4ae55d/1";

const useApiAnime = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

export const useApiAnimeParam = (id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const animeSelected = data.results.filter((element) => element.mal_id == id);
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
