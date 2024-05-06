import { Flex, HStack, Icon, VStack, Text, Stack, useColorModeValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StatCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (route) => () => {
    navigate(route);
  };

  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Stack
        direction="column"
        rounded="md"
        w="100%"
        textAlign="left"
        align="start"
        spacing={0}
        role="group"
        overflow="hidden"
      >
        <HStack py={6} px={5} spacing={4} bg={useColorModeValue("gray.100", "gray.500")} w="100%">
          <Flex
            justifyContent="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="green.400"
            position="relative"
            w={12}
            h={12}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={data.icon} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text as="h3" fontSize="lg" noOfLines={2}>
              {data.label}
            </Text>
            <Text as="h2" fontSize="2xl" fontWeight="extrabold">
              {data.number}
            </Text>
          </VStack>
        </HStack>

        {data.route && (
          <Flex
            visibility="hidden"
            opacity={0}
            height={0}
            alignItems="center"
            _groupHover={{ visibility: "visible", opacity: 1, height: "40px" }}
            bg="gray.100"
            w="100%"
            transition="opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, height 0.3s ease-in-out"
          >
            <Button fontSize="lg" w="100%" onClick={handleClick(data.route)}>
              View Detail
            </Button>
          </Flex>
        )}
      </Stack>
    </motion.div>
  );
};

export default StatCard;
