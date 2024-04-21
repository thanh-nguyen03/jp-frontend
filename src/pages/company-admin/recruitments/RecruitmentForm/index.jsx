import { Button, Flex, FormLabel, Grid, GridItem, Select, Stack, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useForm } from "react-hook-form";
import FormInput from "src/components/form/FormInput";
import { recruitmentFormValidationSchema } from "src/pages/company-admin/recruitments/constants/recruitmentForm";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const RecruitmentForm = ({ recruitment, onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(recruitmentFormValidationSchema),
    defaultValues: {
      ...recruitment,
      deadline: new Date(recruitment?.deadline || new Date()),
    },
  });

  return (
    <Flex w="100%" flex={1} align="center" justifyContent="center" mt={4}>
      <Stack as="form" spacing={4} w="100%" onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={4} w="100%" templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={12}>
            <FormInput
              name="title"
              label="Title"
              placeholder="Recruitment title..."
              errors={errors}
              register={register}
            />
          </GridItem>

          <GridItem colSpan={2}>
            <FormInput name="minSalary" label="Min Salary" placeholder="100" errors={errors} register={register} />
          </GridItem>

          <GridItem colSpan={2}>
            <FormInput name="maxSalary" label="Max Salary" placeholder="500" errors={errors} register={register} />
          </GridItem>

          <GridItem colSpan={3}>
            <FormLabel fontSize="16">Job Type</FormLabel>
            <Select
              placeholder="Select Job Type"
              value={watch("jobType")}
              onChange={(e) => setValue("jobType", e.target.value)}
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="REMOTE">Remote</option>
            </Select>
          </GridItem>

          <GridItem colSpan={3}>
            <FormInput
              name="experience"
              type="number"
              step="0.5"
              label="Experience (years)"
              placeholder="1"
              errors={errors}
              register={register}
            />
          </GridItem>

          <GridItem colSpan={2}>
            <FormLabel fontSize="16">Deadline</FormLabel>
            <SingleDatepicker
              onDateChange={(date) => setValue("deadline", date, { shouldDirty: true })}
              date={watch("deadline")}
            />
          </GridItem>

          <GridItem colSpan={12}>
            <SunEditor
              name="content"
              defaultValue={getValues("content")}
              onChange={(content) => setValue("content", content)}
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

export default RecruitmentForm;
