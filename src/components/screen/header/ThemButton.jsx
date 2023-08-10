//---------------------------------------------------------
//import for the context theme
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
//---------------------------------------------------------
//style
import "../../../styles/components/screen/Header/_themeButton.scss";
import "../../../styles/components/screen/Header/headerMedia/_themebuttonMediaQueries.scss";

//---------------------------------------------------------
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            {/* interaction theme dark and white */}
            <div className="themeButton" onClick={toggleTheme}>
                <div className={`moon ${theme + "Button"}`}></div>
                <div className={`sun ${theme + "Button"}`}></div>
            </div>
        </>
    );
}

export default ThemeButton;
