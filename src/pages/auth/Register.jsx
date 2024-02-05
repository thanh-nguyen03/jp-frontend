import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Link,
  Flex,
  Text,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ROUTES from "src/constants/routes";
import { useRegisterMutation } from "src/redux/api/authApi";
import { object, string } from "yup";

const validationSchema = object({
  username: string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  fullName: string().required("Full name is required").max(255, "Full name must be at most 255 characters"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password must be at most 255 characters"),
});

const Register = () => {
  const [register, { error, isLoading }] = useRegisterMutation();
  const {
    handleSubmit,
    register: formRegister,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, fullName, password } = values;
    try {
      const response = await register({ username, fullName, password }).unwrap();

      if (response.success) {
        navigate(ROUTES.login);
        toast({
          title: "Account created",
          description: "You can now login to your account.",
          status: "success",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        title: error.data.message,
        description: (
          <>
            {error.data.data.map((err) => (
              <Text key={err.errorMessage}>{err.errorMessage}</Text>
            ))}
          </>
        ),
        status: "error",
      });
    }
  }, [error, toast]);

  return (
    <Flex pl={20} flex={1} align="center" justifyContent="center">
      <Stack spacing={4}>
        <Stack align="center">
          <Heading fontSize="2xl">Create a new account</Heading>
        </Stack>
        <VStack
          as="form"
          spacing={10}
          boxSize={{ base: "xs", sm: "md", md: "xl" }}
          h="max-content !important"
          bg={useColorModeValue("white", "gray.700")}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <VStack spacing={4} w="100%">
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input rounded="md" type="text" placeholder="Username" {...formRegister("username")} />
              <FormErrorMessage>{errors.fullName && errors.fullName.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="fullName">
              <FormLabel>Full name</FormLabel>
              <Input rounded="md" type="text" placeholder="Full name" {...formRegister("fullName")} />
              <FormErrorMessage>{errors.fullName && errors.fullName.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input rounded="md" type="password" placeholder="Password" {...formRegister("password")} />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              isLoading={isLoading}
              type="submit"
              bg="green.300"
              color="white"
              _hover={{
                bg: "green.500",
              }}
              rounded="md"
              w="100%"
            >
              Sign up
            </Button>
          </VStack>
          <VStack w="100%">
            <Text fontSize={{ base: "md", sm: "md" }}>
              Already have an account?
              <Link as={RouterLink} to={ROUTES.login} color="green.300" ml={1}>
                Sign in
              </Link>
            </Text>
            <Text fontSize={{ base: "md", sm: "md" }}>
              <Link as={RouterLink} to={ROUTES.dashboard} color="green.300">
                Or continue as guest
              </Link>
            </Text>
          </VStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default Register;
