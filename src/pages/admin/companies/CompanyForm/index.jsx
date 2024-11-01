import { Button, Flex, Grid, GridItem, Stack, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInput from "src/components/form/FormInput";
import {
  companyValidationSchema,
  companyAccountValidationSchema,
} from "src/pages/admin/companies/constants/companyForm";

const CompanyForm = ({ company, onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      company ? companyValidationSchema : companyValidationSchema.concat(companyAccountValidationSchema),
    ),
    defaultValues: company,
  });

  return (
    <Flex w="100%" flex={1} align="center" justifyContent="center" mt={4}>
      <Stack as="form" spacing={4} w="100%" onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={4} w="100%" templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={4}>
            <FormInput name="code" label="Code" placeholder="Code" errors={errors} register={register} />
          </GridItem>

          <GridItem colSpan={8}>
            <FormInput name="name" label="Name" placeholder="Name" errors={errors} register={register} />
          </GridItem>

          <GridItem colSpan={12}>
            <FormInput
              name="description"
              label="Description"
              placeholder="Description"
              errors={errors}
              register={register}
              isMultiline
              rows={15}
            />
          </GridItem>

          <GridItem colSpan={12}>
            <FormInput name="address" label="Address" placeholder="Address" errors={errors} register={register} />
          </GridItem>

          {!company?.id && (
            <>
              <GridItem colSpan={6}>
                <FormInput
                  name="companyAccountFirstName"
                  label="Admin First Name"
                  placeholder="First Name..."
                  errors={errors}
                  register={register}
                />
              </GridItem>

              <GridItem colSpan={6}>
                <FormInput
                  name="companyAccountLastName"
                  label="Admin Last Name"
                  placeholder="Last Name..."
                  errors={errors}
                  register={register}
                />
              </GridItem>

              <GridItem colSpan={6}>
                <FormInput
                  name="companyAccountEmail"
                  label="Admin Account Email"
                  placeholder="Admin Account Email..."
                  errors={errors}
                  register={register}
                />
              </GridItem>

              <GridItem colSpan={6}>
                <FormInput
                  type="password"
                  name="companyAccountPassword"
                  label="Admin Account Password"
                  placeholder="Password..."
                  errors={errors}
                  register={register}
                />
              </GridItem>
            </>
          )}
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
