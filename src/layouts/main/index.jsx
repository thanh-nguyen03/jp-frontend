import {
  Avatar,
  Box,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import ROUTES from "src/constants/routes";
import useAuth from "src/hooks/useAuth";
import SidebarContent from "src/layouts/main/components/SidebarContent.jsx";
import { Outlet, Link as RouterLink, useNavigate } from "react-router-dom";
import { logout } from "src/redux/state/reducers/authReducer";

const MainLayout = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(ROUTES.dashboard);
    dispatch(logout());
  };

  return (
    <Box as="section" bg={useColorModeValue("gray.50", "gray.700")} minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justifyContent={{ base: "space-between", md: "flex-end" }}
          w="full"
          px="4"
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="sm"
          h="14"
        >
          {!isAuthenticated && (
            <HStack gap={2}>
              <Button as={RouterLink} to={ROUTES.login} colorScheme="teal">
                Login
              </Button>

              <Button as={RouterLink} to={ROUTES.register} colorScheme="teal" variant="outline">
                Sign up
              </Button>
            </HStack>
          )}
          {isAuthenticated && (
            <>
              <IconButton
                aria-label="Menu"
                display={{ base: "inline-flex", md: "none" }}
                onClick={onOpen}
                icon={<FiMenu />}
                size="md"
              />

              <Flex align="center">
                <Icon color="gray.500" as={FaBell} cursor="pointer" />
                <Menu>
                  <MenuButton>
                    <Avatar
                      ml="4"
                      size="sm"
                      name="Ahmad"
                      src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                      cursor="pointer"
                    />
                  </MenuButton>

                  <MenuList>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
          )}
        </Flex>

        <Box as="main" minH="25rem" bg={useColorModeValue("auto", "gray.800")}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
