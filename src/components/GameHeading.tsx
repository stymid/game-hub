import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatform();
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const { data: genres } = useGenres();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
