//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//style
//import "../../styles/components/_key.scss";

//---------------------------------------------------------
function Key({ keyLetter }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`key ${theme + "Key"}`}>
            <p>{keyLetter}</p>
        </div>
    );
}

export default Key;
