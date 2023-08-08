//---------------------------------------------------------
//import for the context theme
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
//---------------------------------------------------------
//style
import "../../../styles/components/screen/_themeButton.scss";
import "../../../styles/components/screen/screenMedia/_themebuttonMediaQueries.scss";

//---------------------------------------------------------
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            {/* interaction theme dark and white */}
            <div className="themeButton">
                <div className={`${theme + "Button"}`} onClick={toggleTheme}>
                    <p title="Changer le theme.">
                        {theme === "white" ? "Dark" : "White"}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ThemeButton;
