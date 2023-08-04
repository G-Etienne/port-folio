//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//style
import "../../styles/layout/_screen.scss";
//---------------------------------------------------------
//components
import Header from "./Header";

//---------------------------------------------------------
function Screen() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`screen ${theme + "screen"}`}>
                <Header />
            </div>
        </>
    );
}

export default Screen;
