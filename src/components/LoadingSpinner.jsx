import { Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Spinner color="primary" size="xl" thickness="4px" />
    </Box>
  );
};

export default LoadingSpinner;
