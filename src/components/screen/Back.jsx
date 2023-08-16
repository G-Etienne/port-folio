//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//--------------------------------------------------
//style
import "../../styles/components/screen/_back.scss";

//--------------------------------------------------
//animation element
import AnimBack from "./AnimBack";

//--------------------------------------------------
function Back() {
    {
        /* themes */
    }
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {/* container for the back which cover the animation */}
            <div className={`backSide ${theme}`}></div>

            {/* animation */}
            <AnimBack />
        </>
    );
}

export default Back;
