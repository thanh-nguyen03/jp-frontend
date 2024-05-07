import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, useToast, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Page from "src/components/Page";
import { useChangePasswordMutation } from "src/redux/api/userApi";
import { object, ref, string } from "yup";

const validationSchema = object({
  currentPassword: string()
    .required("Current password is required")
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password must be at most 255 characters"),
  newPassword: string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password must be at most 255 characters"),
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("newPassword"), null], "Passwords must match"),
});

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const toast = useToast();

  const onSubmit = async (values) => {
    const { currentPassword, newPassword } = values;
    try {
      await changePassword({ currentPassword, newPassword }).unwrap();
      toast({
        title: "Success",
        description: "Password changed successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Page title="Change Password">
      <HStack justifyContent="center" mt={10}>
        <VStack as="form" gap={4} w="50%" justifyItems="center" onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="currentPassword" isInvalid={errors?.currentPassword}>
            <FormLabel>Current Password</FormLabel>
            <Input rounded="md" type="password" placeholder="Current Password" {...register("currentPassword")} />
            <FormErrorMessage>{errors.currentPassword && errors.currentPassword.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="newPassword" isInvalid={errors?.newPassword}>
            <FormLabel>New Password</FormLabel>
            <Input rounded="md" type="password" placeholder="Password" {...register("newPassword")} />
            <FormErrorMessage>{errors.newPassword && errors.newPassword.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="confirmPassword" isInvalid={errors?.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <Input rounded="md" type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
            <FormErrorMessage>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
          </FormControl>
          <Button
            isLoading={isLoading}
            type="submit"
            bg="green.500"
            color="white"
            _hover={{
              bg: "green.600",
            }}
            rounded="md"
            w="100%"
          >
            Change Password
          </Button>
        </VStack>
      </HStack>
    </Page>
  );
};

export default ChangePassword;
