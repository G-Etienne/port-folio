//---------------------------------------------------------
//import of react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

//---------------------------------------------------------
//Routes components
import Home from "../pages/Home";
import Screen from "../components/screen/Screen";
import Footer from "../components/Footer";
import Main from "../components/Main";
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
                        <Route path="/" />
                        <Route path="/home" element={<Home />} />
                        <Route path="/goals" />
                        <Route path="/skills" />
                        <Route path="/projects" />
                        <Route path="/trainings" />
                        <Route path="/contact" />
                    </Routes>

                    <Footer />
                </LangueProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default Roads;
