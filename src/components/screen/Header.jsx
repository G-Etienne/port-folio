//---------------------------------------------------------
//components
import ThemeButton from "./header/ThemButton";
import LangueButton from "./header/LangueButton";

//---------------------------------------------------------
//style
import "../../styles/layout/_header.scss";

//---------------------------------------------------------
function Header() {
    return (
        <>
            <header className="header">
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
