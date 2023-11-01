import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profession from "./pages/Profession";
import Contact from "./pages/Contact";
import Root from "./pages/Root";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode.value) ? "light" : "dark";
  const theme = createTheme({
    palette: {
      mode: mode,
    },
    typography:{
      fontFamily: 'Nunito Sans',
      fontSize: 20,
      button: {
        fontSize: '1.5rem',
        textTransform: 'none'
      }
    },
    shape: {
      borderRadius: 12
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="home" element={<Home />} />
            <Route path="profession" element={<Profession />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
