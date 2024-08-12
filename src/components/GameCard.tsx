import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card>
      {isLoading && <Skeleton height="200px"></Skeleton>}
      <Image
        src={getCroppedImageUrl(game.background_image)}
        onLoad={() => setIsLoading(false)}
      />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatformiconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={"/games/" + game.slug}>{game.name} </Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
