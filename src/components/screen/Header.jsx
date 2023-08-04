//---------------------------------------------------------
//import for the context theme
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
//---------------------------------------------------------
//style
import "../../styles/layout/_header.scss";

//---------------------------------------------------------
function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <header className="header">
                {/* interaction theme dark and white */}
                <div>
                    <p>Current Theme: {theme}</p>
                    <button onClick={toggleTheme}>
                        {theme === "white"
                            ? "Switch to Dark Theme"
                            : "Switch to White Theme"}
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
