import { Stack, Image, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Outlet />

      <Flex flex={1} pr={20} pt={18} alignItems="center" justifyContent="center">
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://www.careerguide.com/career/wp-content/uploads/2023/11/Jobs-in-Australia.png"
        />
      </Flex>
    </Stack>
  );
};

export default AuthLayout;
