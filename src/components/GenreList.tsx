import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStor from "../services/zustand/store";
import GenreCardSkeleton from "./GenreCardSkeleton";

const GenreList = () => {
  const selectedGenreId = useGameQueryStor((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStor((s) => s.setGenreId);

  const { data, isLoading, error } = useGenres();
  if (error) return null; //  not work becaus genres.ts
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      {isLoading && <GenreCardSkeleton />}
      {/* "not work because of the genres.ts" */}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => {
                  setSelectedGenreId(genre.id);
                }}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
                {/* {genre.name.length > 13
                  ? genre.name.substring(0, 13) + "..."
                  : genre.name} */}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
