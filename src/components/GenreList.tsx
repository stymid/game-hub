import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreCardSkeleton from "./GenreCardSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && <GenreCardSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Text fontSize={"lg"}> {genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
