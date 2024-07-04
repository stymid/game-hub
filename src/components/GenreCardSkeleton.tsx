import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <List>
        {skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY={1}>
            <HStack>
              <Skeleton boxSize={"32px"} borderRadius={8} />
              <SkeletonText width={"100px"} fontSize={"lg"} />
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreCardSkeleton;
