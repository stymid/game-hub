import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStor from "../services/zustand/store";

const GameHeading = () => {
  const genreId = useGameQueryStor((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStor((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
