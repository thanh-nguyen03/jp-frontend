import { Card, CardBody, Divider, Heading, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";

const CompanyDetailMainCard = ({ company }) => {
  const primaryColor = useColorModeValue("primary");

  return (
    <Card overflow="hidden" variant="outline" my={4} bgGradient={`linear-gradient(45deg, #22543D, ${primaryColor})`}>
      <CardBody>
        <HStack justifyContent="space-between" color="white">
          <Heading size="lg">
            {company.code}: {company.name}
          </Heading>
        </HStack>

        <Divider my={4} />

        <VStack my={4} justifyContent="space-between" alignItems="start" color="white">
          <Text>Address: {company.address}</Text>

          <Text>{company.description}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CompanyDetailMainCard;
