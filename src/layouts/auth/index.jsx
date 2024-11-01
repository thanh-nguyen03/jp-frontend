import { Stack, Image, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import imgUrl from "src/assets/Jobs-in-Australia.png";

const AuthLayout = () => {
  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Outlet />

      <Flex flex={1} pr={20} pt={18} alignItems="center" justifyContent="center">
        <Image alt="Cover image" objectFit="cover" src={imgUrl} />
      </Flex>
    </Stack>
  );
};

export default AuthLayout;
