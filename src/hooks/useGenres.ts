import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
}

// Define the structure of API response
interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
  
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
  
      const controller = new AbortController(); 
  
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal})
        .then((res) => {setGenres(res.data.results);
        setLoading(false); // Stop loading after data is fetched
        })
        .catch((err) => {
          if(err instanceof addEventListener) return;
          setError(err.message)
          setLoading(false);
      });
  
      return () => controller.abort(); // Cleanup function to abort the request on unmount
    }, []);
    
    return { genres, error, isLoading };
}

export default useGenres;