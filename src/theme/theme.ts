import { extendTheme } from "@chakra-ui/react";
import ButtonTheme from "./components/Button.theme";
// https://chakra-ui.com/docs/theming/theme
export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        margin: 0,
        background: "linear-gradient(289.6deg, #0C0C0C 0%, #2C4550 98.22%)",
      },
    },
  },
  fonts: {
    body: "Poppins, system-ui, sans-serif",
  },
  colors: {
    primary: "rgba(255, 255, 255, 0.9)",
    black: "#363663",
    backgroundCard: "radial-gradient(100% 2631.09% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.558) 100%)",
  },
  components: {
    Button: ButtonTheme,
  },
});
