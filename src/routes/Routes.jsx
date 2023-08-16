//---------------------------------------------------------
//import of react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

//---------------------------------------------------------
//Routes components
import Main from "../components/Main";

//---------------------------------------------------------
//context importation
import { ThemeProvider } from "../contexts/ThemeContext";
import { LangueProvider } from "../contexts/LangueContext";

//---------------------------------------------------------
function Roads() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <LangueProvider>
                    {/* application */}
                    <Main />

                    <Routes>
                        <Route path="/home" />
                        <Route path="/goals" />
                        <Route path="/skills" />
                        <Route path="/projects" />
                        <Route path="/trainings" />
                    </Routes>
                </LangueProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default Roads;
