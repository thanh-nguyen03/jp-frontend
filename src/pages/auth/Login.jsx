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
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ROUTES from "src/constants/routes";
import { useLoginMutation } from "src/redux/api/authApi";
import { setCredential, storeTokens } from "src/redux/state/reducers/authReducer";
import { object, string } from "yup";

const validationSchema = object({
  email: string().required("Email is required").email("Email is invalid"),
  password: string()
    .required("Password is required")
    .min(1, "Password must be at least 6 characters")
    .max(255, "Password must be at most 255 characters"),
});

const Login = () => {
  const [login, { error, isLoading }] = useLoginMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const data = await login({ email, password }).unwrap();
      const { access_token, refresh_token, user } = data.data;
      navigate(ROUTES.dashboard);
      const timeout = setTimeout(() => {
        dispatch(storeTokens({ access_token, refresh_token }));
        dispatch(setCredential({ user }));
        toast({
          title: "Success",
          description: "You have successfully logged in.",
          status: "success",
        });
      });

      return () => clearTimeout(timeout);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (error?.data?.data) {
      toast({
        title: error.data.message,
        description: (
          <>
            {[...error.data.data].map((err) => (
              <Text key={err.errorMessage}>{err.errorMessage}</Text>
            ))}
          </>
        ),
        status: "error",
      });
    } else if (error) {
      toast({
        title: "Error",
        description: error.data.message,
        status: "error",
      });
    }
  }, [error, toast]);

  return (
    <Flex pl={20} flex={1} align="center" justifyContent="center">
      <Stack spacing={4}>
        <Stack align="center">
          <Heading fontSize="2xl">Sign in to your account</Heading>
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
            <FormControl id="email" isInvalid={errors?.email}>
              <FormLabel>Email</FormLabel>
              <Input rounded="md" type="text" placeholder="Email" {...register("email")} />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors?.password}>
              <FormLabel>Password</FormLabel>
              <Input rounded="md" type="password" placeholder="Password" {...register("password")} />
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
              Sign in
            </Button>
          </VStack>
          <VStack w="100%">
            <Text fontSize={{ base: "md", sm: "md" }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account?
              <Link as={RouterLink} to={ROUTES.register} color="green.300" ml={1}>
                Sign up
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

export default Login;
