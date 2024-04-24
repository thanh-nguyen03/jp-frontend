import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function RecruitmentSearchBar({ handleSearch, isSearching }) {
  const [searchInfo, _setSearchInfo] = useState({
    title: "",
    jobType: "",
    minSalary: 0,
    maxSalary: 0,
    experience: 0,
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
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={searchInfo.title}
              placeholder="Search job title..."
              onChange={(e) => setSearchInfo("title", e.target.value)}
            />
          </FormControl>
        </Box>

        <Box>
          <FormLabel fontSize="16">Job Type</FormLabel>
          <Select
            placeholder="Select Job Type"
            value={searchInfo.jobType}
            onChange={(e) => setSearchInfo("jobType", e.target.value)}
          >
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="REMOTE">Remote</option>
          </Select>
        </Box>

        <Box>
          <FormLabel>Min Salary</FormLabel>
          <NumberInput
            size="md"
            maxW={24}
            value={searchInfo.minSalary}
            onChange={(val) => setSearchInfo("minSalary", Number(val))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box>
          <FormLabel>Max Salary</FormLabel>
          <NumberInput
            size="md"
            maxW={24}
            value={searchInfo.maxSalary}
            onChange={(val) => setSearchInfo("maxSalary", Number(val))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box>
          <FormLabel>Experience (years)</FormLabel>
          <NumberInput
            size="md"
            maxW={40}
            value={searchInfo.experience}
            onChange={(val) => setSearchInfo("experience", Number(val))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
