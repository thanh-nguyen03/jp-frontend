import { baseTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: baseTheme.colors.green["500"],
  },
});

export default theme;
