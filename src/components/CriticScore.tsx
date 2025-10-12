import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <div>
      <Badge fontSize="14px" padding={2} borderRadius={4} colorPalette={color}>
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
