import { Badge, Button, Card, CardBody, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaUserClockSolid } from "react-icons/lia";
import { TbSend } from "react-icons/tb";
import jobType from "src/constants/jobType";
import { formatDate } from "src/helpers/date";

const RecruitmentDetailTopCard = ({ recruitment }) => {
  return (
    <Card overflow="hidden" variant="outline" my={4}>
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading size="md">{recruitment.title}</Heading>

          <Badge fontSize={14} p={1} px={2} colorScheme="gray" rounded="md">
            Deadline: {formatDate(new Date(recruitment.deadline))}
          </Badge>
        </HStack>

        <HStack my={4} mt={6} justifyContent="space-between">
          <RecruitmentShortInfo
            icon={FaMoneyCheckDollar}
            title="Salary"
            content={`${recruitment.minSalary} - ${recruitment.maxSalary} USD`}
            iconSize={42}
          />
          <RecruitmentShortInfo
            icon={BsReverseLayoutTextSidebarReverse}
            title="Job Type"
            content={jobType[recruitment.jobType]}
            iconSize={34}
          />
          <RecruitmentShortInfo
            icon={LiaUserClockSolid}
            title="Experience"
            content={`${recruitment.experience} years`}
            iconSize={40}
          />
          <RecruitmentShortInfo
            icon={FaLocationDot}
            title="Address"
            content={recruitment.company.address}
            iconSize={30}
          />
        </HStack>

        <Button
          leftIcon={<Icon fontSize={20} as={TbSend} />}
          variant="solid"
          size="sm"
          colorScheme="green"
          w="100%"
          my={4}
        >
          Apply Now
        </Button>
      </CardBody>
    </Card>
  );
};

const RecruitmentShortInfo = ({ icon, title, content, iconSize = 36 }) => {
  return (
    <HStack gap={4}>
      <Icon as={icon} color="primary" fontSize={iconSize} />
      <VStack alignItems="start" justifyContent="flex-start" gap={0}>
        <Text>{title}</Text>
        <Text fontSize="md" fontWeight="bold">
          {content}
        </Text>
      </VStack>
    </HStack>
  );
};

export default RecruitmentDetailTopCard;
