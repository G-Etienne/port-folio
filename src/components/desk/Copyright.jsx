//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LangueContext } from "../../contexts/LangueContext";

//------------------------------------------------------
//style
import "../../styles/components/desk/_desk.scss";
//media queries
import "../../styles/components/desk/desk-media/_deskMediaQueries.scss";

//----------------------------------------------------
function Copyright() {
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);
    //french
    if (langue === "french") {
        return (
            <p className={`copyright ${theme + "Copyright"}`}>
                © 2023 Etienne Ginet Tous droits réservés.
            </p>
        );
    }
    //english
    if (langue === "english") {
        return (
            <p className={`copyright ${theme + "Copyright"}`}>
                © 2023 Etienne Ginet All rights reserved.
            </p>
        );
    }
}

export default Copyright;