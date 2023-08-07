//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//style
import "../../styles/components/desk/_light.scss";

//---------------------------------------------------------
function Light() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="light">
                <div className={`light__head__top ${theme + "HeadTop"}`}></div>
                <div className={`light__head ${theme + "Head"}`}></div>
                <div className={`light__on__top ${theme + "Head"}`}></div>
                <div className={`light__on ${theme + "Head"}`}></div>
                <div className={`light__on__bottom ${theme + "Head"}`}></div>
                <div></div>
                <div className={`light__arm ${theme + "Arm"}`}></div>
                <div
                    className={`light__arm__Shadow ${theme + "ArmShadow"}`}
                ></div>
                <div className={`light__baseTop ${theme + "BaseTop"}`}></div>
                <div
                    className={`light__baseMiddle ${theme + "BaseMiddle"}`}
                ></div>
                <div
                    className={`light__baseBottom ${theme + "BaseBottom"}`}
                ></div>
            </div>
        </>
    );
}

export default Light;
