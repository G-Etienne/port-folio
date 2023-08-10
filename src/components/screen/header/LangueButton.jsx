//---------------------------------------------------------
//import for the context theme
import { useContext } from "react";
import { LangueContext } from "../../../contexts/LangueContext";
//---------------------------------------------------------
//style
import "../../../styles/components/screen/Header/_langueButton.scss";
import "../../../styles/components/screen/Header/headerMedia/_langueButtonMediaQueries.scss";

//---------------------------------------------------------
function LangueButton() {
    const { langue, toggleLangue } = useContext(LangueContext);

    return (
        <>
            {/* interaction for the choice of language */}
            <div className="langueButton" onClick={toggleLangue}>
                {/* flags */}
                <div className={`frenchFlag ${langue + "Button"}`}></div>
                <div className={`englishFlag ${langue + "Button"}`}></div>
            </div>
        </>
    );
}

export default LangueButton;
