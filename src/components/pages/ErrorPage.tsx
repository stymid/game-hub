import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "This page is not exist." : "ghv"} An
          unecpected error eccurred
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
