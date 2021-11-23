import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import DarkMode from "./components/DarkMode/DarkMode";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import { ThemeContext } from "./context";


const App = () => {


  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <DarkMode/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
}

export default App;
