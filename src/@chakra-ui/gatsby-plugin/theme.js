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
};

export default extendTheme(theme);
