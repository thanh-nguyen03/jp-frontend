import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useSidebarConfig from "src/hooks/useSidebarConfig";
import NavItem from "src/layouts/main/components/NavItem.jsx";
import { SiMarketo } from "react-icons/si";

const SidebarContent = ({ ...props }) => {
  const sidebarConfig = useSidebarConfig();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Icon as={SiMarketo} h={8} w={8} />
        <Text fontSize="2xl" ml="2" color={useColorModeValue("brand.500", "white")} fontWeight="semibold">
          IT Job Portal
        </Text>
      </Flex>
      <Flex direction="column" as="nav" fontSize="md" color="gray.600" aria-label="Main Navigation">
        {sidebarConfig.map((item, index) => (
          <Link to={item.path} key={index}>
            <NavItem key={index} icon={item.icon}>
              {item.title}
            </NavItem>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SidebarContent;
