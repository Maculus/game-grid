import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



// Define the structure of API response
interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
  
      const controller = new AbortController(); 
  
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {setData(res.data.results);
        setLoading(false); // Stop loading after data is fetched
        })
        .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false);
      });
  
      return () => controller.abort(); // Cleanup function to abort the request on unmount
    }, deps ? [...deps] : []); // Dependency array for re-fetching data when dependencies change
    
    return { data, error, isLoading };
}

export default useData;