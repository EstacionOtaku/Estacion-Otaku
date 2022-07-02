import { useEffect, useState } from "react";
// import axios from "axios";

const url = process.env.REACT_APP_BASE_API_URL;
const token = localStorage.getItem("accessToken");

const useApiAnime = (path) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useState({});
  const api = `https://${url}/${path}`;

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        setLoading(true);
        const response = await fetch(api, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await response.json();
        setData(json);
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
  const api = `https://${url}/${path}`;

  useEffect(() => {
    const apiAnimes = async () => {
      try {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
