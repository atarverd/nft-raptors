import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#0c1821")(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: StyleFunctionProps | Record<string, any>) => ({
      dialog: {
        bg: mode("white", "#141214")(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
