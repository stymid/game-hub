import { Box, Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <Box marginBottom={3}>
      <video src={first?.data[480]} poster={first?.preview} controls />
    </Box>
  ) : (
    <Text>This game ain't no trailer</Text>
  );
};

export default GameTrailer;
