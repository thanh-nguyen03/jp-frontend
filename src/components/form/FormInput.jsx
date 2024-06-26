import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";

const FormInput = ({ name, type = "text", label, errors, placeholder, register, isMultiline, rows = 3, ...props }) => {
  return (
    <FormControl id={name} isInvalid={errors[name]}>
      <FormLabel fontSize="16">{label}</FormLabel>
      {isMultiline ? (
        <Textarea rounded="md" type="text" placeholder={placeholder} rows={rows} {...register(name)} {...props} />
      ) : (
        <Input rounded="md" type={type} placeholder={placeholder} {...register(name)} {...props} />
      )}
      <FormErrorMessage>{errors[name] && errors[name].message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
