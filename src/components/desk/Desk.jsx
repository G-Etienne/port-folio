//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//------------------------------------------------------
//style
//import "../../styles/layout/_footer.scss";

//------------------------------------------------------
//Desk components
//Letters for the kaydoard
import Key from "./Key";
//Light on the desk
import Light from "./Light";
//------------------------------------------------------
//Data keyworld
import keyData from "../../data/key.json";

//-----------------------------------------------------
function Desk() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {/* light on the desk */}
            <Light />
            {/* copyright */}
            <p className={`footer__copyright ${theme + "Copyright"}`}>
                © 2023 Etienne Ginet Tous droits réservés.
            </p>
            {/* desk top */}
            <div className={`footer__desk ${theme + "Desk"}`}>
                {/* keyword on the desk */}
                <div className="footer__desk__keyboard">
                    {keyData.map((item) => (
                        <Key key="1" keyLetter={item.key} />
                    ))}
                </div>
                {/* thickness of the keyboard */}
                <div className="footer__desk__keyboard__front"></div>
                {/* computer mouse */}
                <div className="footer__desk__mousepad">
                    <div className={`footer__desk__mouse ${theme + "Mouse"}`}>
                        {/* touches of the mouse */}
                        <div className="footer__desk__mouseTouchOne"></div>
                        <div className="footer__desk__mouseTouchTwo"></div>
                    </div>
                </div>
            </div>
            {/* thickness of the desk top */}
            <div className={`footer__desk__front ${theme + "DeskFront"}`}></div>
            {/* elements under the desk top */}
            <div className={`footer__desk__underTop ${theme + "UnderTop"}`}>
                <div className={`footer__desk__drawer ${theme + "Drawer"}`}>
                    <div className="footer__desk__drawer__grip"></div>
                </div>
            </div>
        </>
    );
}

export default Desk;
