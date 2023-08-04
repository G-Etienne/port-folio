//---------------------------------------------------------
//import of react router dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

//---------------------------------------------------------
//Routes components
import Main from "../components/Main";

//---------------------------------------------------------
//context importation
import { ThemeProvider } from "../contexts/ThemeContext";

//---------------------------------------------------------
function Roads() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                {/* application */}
                <Main></Main>
                <Routes>
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default Roads;
