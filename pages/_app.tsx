import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

const theme = extendTheme({
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
        _hover: { color: "acsgreen" },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
