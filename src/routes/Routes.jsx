//---------------------------------------------------------
//import of react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

//---------------------------------------------------------
//Routes components
import About from "../pages/About";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Home from "../pages/Home";
//---------------------------------------------------------
//context importation
import { ThemeProvider } from "../contexts/ThemeContext";
import { LangueProvider } from "../contexts/LangueContext";

//---------------------------------------------------------
//style
import "../styles/bases/_bases.scss";

//---------------------------------------------------------
function Roads() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <LangueProvider>
                    {/* application */}
                    <Main />

                    <Routes>
                        <Route path="/*" />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/goals" />
                        <Route path="/skills" />
                        <Route path="/projects" />
                        <Route path="/trainings" />
                        <Route path="/contact" />
                        <Route path="/resume" />
                        <Route path="/graphics" />
                    </Routes>
                    <Footer />
                </LangueProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default Roads;
