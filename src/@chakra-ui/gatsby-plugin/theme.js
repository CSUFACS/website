import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

const theme = {
  colors: {
    acsgreen: "#019378",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      a: {
        _hover: { color: "acsgreen" }
      }
    }
  }
};

export default extendTheme(theme);
