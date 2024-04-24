import { Box, Button, FormControl, FormLabel, HStack, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function CompanySearchBar({ handleSearch, isSearching = false }) {
  const [searchInfo, _setSearchInfo] = useState({
    name: "",
  });

  const setSearchInfo = (field, value) => {
    _setSearchInfo({
      ...searchInfo,
      [field]: value,
    });
  };

  return (
    <Box my={4}>
      <HStack gap={4} w="100%" alignItems="end">
        <Box flex={1}>
          <FormControl id="name">
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              value={searchInfo.name}
              placeholder="Search company..."
              onChange={(e) => setSearchInfo("name", e.target.value)}
            />
          </FormControl>
        </Box>

        <Button
          isLoading={isSearching}
          bg="primary"
          color="white"
          _hover={{
            bg: "green.600",
          }}
          rounded="md"
          leftIcon={<Icon as={IoSearch} />}
          onClick={() => handleSearch(searchInfo)}
        >
          Search
        </Button>
      </HStack>
    </Box>
  );
}
