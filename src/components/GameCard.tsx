import { Card, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="lg" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body gap={2}>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
