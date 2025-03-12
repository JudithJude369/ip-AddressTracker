import { useState, useEffect } from 'react';
import axios from 'axios'; //used axios  it is easier for api fetch
export const useFetch = (url) => {
  // adjusted the parameter in the useState below
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      if (!url) return; //---added this

      const fetchData = async () => {
        setLoading(true); 
        setError(false);
        try {
          const response = await axios.get(url); //using axios in place of fetch
          setData(response.data);
        } catch (err) {
          setError(true);
        } finally {
          setLoading(false);
        }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};