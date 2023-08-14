//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//components
import ThemeButton from "./header/ThemButton";
import LangueButton from "./header/LangueButton";
import Menu from "./header/Menu";

//---------------------------------------------------------
//style
import "../../styles/layout/_header.scss";

//---------------------------------------------------------
function Header() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <header className="header">
                {/* menu of the site */}
                <Menu />
                <h1 className={`header__title ${theme}`}>Etienne Ginet</h1>
                {/* interaction theme dark and white */}
                <div className="headerThemeLangue">
                    <ThemeButton />
                    <LangueButton />
                </div>
            </header>
        </>
    );
}

export default Header;
