import { Badge, Button, Card, CardBody, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaUserClockSolid } from "react-icons/lia";
import { TbSend } from "react-icons/tb";
import jobType from "src/constants/jobType";
import { formatDate, formatDateTime } from "src/helpers/date";

const RecruitmentDetailTopCard = ({ recruitment, onApply, userApplication, onViewApplication }) => {
  return (
    <Card overflow="hidden" variant="outline" my={4}>
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading size="md">{recruitment.title}</Heading>

          <Badge fontSize={14} p={1} px={2} colorScheme="gray" rounded="md">
            Deadline: {formatDate(new Date(recruitment.deadline))}
          </Badge>
        </HStack>

        <Text fontSize="lg" mt={2}>
          {recruitment.company.name}
        </Text>

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

        {!userApplication && (
          <Button
            leftIcon={<Icon fontSize={20} as={TbSend} />}
            variant="solid"
            size="sm"
            colorScheme="green"
            w="100%"
            my={4}
            onClick={onApply}
          >
            Apply Now
          </Button>
        )}

        {userApplication && (
          <>
            <Text fontSize="lg">
              You have applied for this job at: {formatDateTime(new Date(userApplication.createdAt))}
            </Text>
            <Text fontSize="lg">Status: {userApplication.status}</Text>

            <Button
              leftIcon={<Icon fontSize={20} as={FaEye} />}
              variant="solid"
              size="sm"
              colorScheme="green"
              w="100%"
              my={4}
              onClick={onViewApplication}
            >
              Applied. Click to view
            </Button>
          </>
        )}
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
