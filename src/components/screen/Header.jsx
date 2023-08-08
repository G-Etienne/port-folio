//---------------------------------------------------------
//components
import ThemeButton from "./header/ThemButton";

//---------------------------------------------------------
//style
import "../../styles/layout/_header.scss";

//---------------------------------------------------------
function Header() {
    return (
        <>
            <header className="header">
                {/* interaction theme dark and white */}
                <ThemeButton />
            </header>
        </>
    );
}

export default Header;
