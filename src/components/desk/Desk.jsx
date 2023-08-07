//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//------------------------------------------------------
//style
import "../../styles/components/desk/_desk.scss";

//------------------------------------------------------
//Desk components
//Light on the desk
import Light from "./Light";
import Keyword from "./Keyword";
import Mouse from "./Mouse";

//-----------------------------------------------------
function Desk() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {/* light on the desk */}
            <Light />
            {/* copyright */}
            <p className={`copyright ${theme + "Copyright"}`}>
                © 2023 Etienne Ginet Tous droits réservés.
            </p>
            {/* desk top */}
            <div className={`desk ${theme + "Desk"}`}>
                <Keyword />
                <Mouse />
            </div>
            {/* thickness of the desk top */}
            <div className={`desk__front ${theme + "DeskFront"}`}></div>
            {/* elements under the desk top */}
            <div className={`desk__underTop ${theme + "UnderTop"}`}>
                <div className={`desk__drawer ${theme + "Drawer"}`}>
                    <div className="desk__drawer__grip"></div>
                </div>
            </div>
        </>
    );
}

export default Desk;
