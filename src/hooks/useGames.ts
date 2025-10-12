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

  useEffect(() => {

    const controller = new AbortController(); 

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof addEventListener) return;
        setError(err.message)
    });

    return () => controller.abort(); // Cleanup function to abort the request on unmount
  }, []);
  
  return { games, error };
}
export default useGames;