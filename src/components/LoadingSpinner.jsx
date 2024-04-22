import { Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = ({ size = "xl" }) => {
  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Spinner color="primary" size={size} thickness="4px" colorScheme="green" />
    </Box>
  );
};

export default LoadingSpinner;
