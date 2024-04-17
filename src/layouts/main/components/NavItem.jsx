import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ROUTES from "src/constants/routes";
import getMostMatchingPath from "src/helpers/getMostMatchingPath";

const NavItem = (props) => {
  const color = useColorModeValue("gray.600", "gray.300");
  const { pathname } = useLocation();

  const { icon, children, path } = props;

  const isActive = useMemo(() => {
    return getMostMatchingPath(pathname, Object.values(ROUTES)) === path;
  }, [path, pathname]);

  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".2s ease"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      fontSize={["md", "lg"]}
      borderColor={isActive ? "primary" : "transparent"}
      borderLeftWidth="6px"
      borderRightRadius="5px"
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="5"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default NavItem;
