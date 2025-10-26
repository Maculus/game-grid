import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number;
}

// Define the structure of API response
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController(); 

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {setGames(res.data.results);
      setLoading(false); // Stop loading after data is fetched
      })
      .catch((err) => {
        if(err instanceof addEventListener) return;
        setError(err.message)
        setLoading(false);
    });

    return () => controller.abort(); // Cleanup function to abort the request on unmount
  }, []);
  
  return { games, error, isLoading };
}
export default useGames;