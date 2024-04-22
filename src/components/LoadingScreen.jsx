import { AbsoluteCenter, Box, Spinner } from "@chakra-ui/react";
import Page from "src/components/Page";

const LoadingScreen = () => {
  return (
    <Page>
      <Box position="relative" h="100vh">
        <AbsoluteCenter p="4" color="white" axis="both">
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.500" size="xl" />
        </AbsoluteCenter>
      </Box>
    </Page>
  );
};

export default LoadingScreen;
