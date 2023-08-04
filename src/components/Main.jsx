//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

//---------------------------------------------------------
//import of the components
import Screen from "./screen/Screen";
import Header from "./screen/Header";
import Footer from "./Footer";

//---------------------------------------------------------
//style
import "../styles/bases/_bases.scss";

//---------------------------------------------------------
function Main() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`mainWrapper ${theme + "main"}`}>
            <Screen>
                <Header />
            </Screen>
            <Footer />
        </div>
    );
}

export default Main;
