import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames(); // Destructure games and error from the custom hook

  return (
    <>
      {error && <text>{error}</text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
