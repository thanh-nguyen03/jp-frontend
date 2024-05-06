import { Button, Flex, Grid, GridItem, Stack, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInput from "src/components/form/FormInput";
import { hrValidationSchema } from "src/pages/company-admin/hr/constants/hrForm";

const CompanyForm = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(hrValidationSchema),
  });

  return (
    <Flex w="100%" flex={1} align="center" justifyContent="center" mt={4}>
      <Stack as="form" spacing={4} w="100%" onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={4} w="100%" templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={6}>
            <FormInput
              name="firstName"
              label="HR First Name"
              placeholder="First Name..."
              errors={errors}
              register={register}
            />
          </GridItem>

          <GridItem colSpan={6}>
            <FormInput
              name="lastName"
              label="HR Last Name"
              placeholder="Last Name..."
              errors={errors}
              register={register}
            />
          </GridItem>

          <GridItem colSpan={6}>
            <FormInput
              name="email"
              label="HR Account Email"
              placeholder="Admin Account Email..."
              errors={errors}
              register={register}
            />
          </GridItem>

          <GridItem colSpan={6}>
            <FormInput
              type="password"
              name="password"
              label="HR Account Password"
              placeholder="Password..."
              errors={errors}
              register={register}
            />
          </GridItem>
        </Grid>

        <VStack w="100%" alignItems="end">
          <Button
            isLoading={isSubmitting}
            type="submit"
            bg="primary"
            color="white"
            _hover={{
              bg: "green.600",
            }}
            rounded="md"
          >
            Save
          </Button>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default CompanyForm;
