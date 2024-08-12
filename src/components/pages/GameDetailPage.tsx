import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
