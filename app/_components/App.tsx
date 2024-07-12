import { ThemeProvider, useTheme } from "@/app/_contexts/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
