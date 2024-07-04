import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGmes";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {isLoading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
          padding={"10px"}
          spacing={3}
        >
          {Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        padding={"10px"}
        spacing={3}
      >
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
