import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ICocktail } from "../interfaces/ICocktail";

export const useFetch = (url: string) => {
  const [response, setResponse] = useState<{ drinks: ICocktail[] }>({
    drinks: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setResponse(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, loading, setLoading };
};
