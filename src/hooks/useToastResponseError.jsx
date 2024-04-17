import { Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const useToastResponseError = (error) => {
  const toast = useToast();

  useEffect(() => {
    if (error?.data?.data) {
      toast({
        title: error.data.message,
        description: (
          <>
            {[...error.data.data].map((err) => (
              <Text key={err.errorMessage}>{err.errorMessage}</Text>
            ))}
          </>
        ),
        status: "error",
      });
    } else if (error) {
      toast({
        title: "Error",
        description: error.data.message,
        status: "error",
      });
    }
  }, [error, toast]);
};

export default useToastResponseError;
