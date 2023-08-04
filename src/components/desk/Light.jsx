//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//---------------------------------------------------------
//style
//import "../../styles/components/_light.scss";

//---------------------------------------------------------
function Light() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="light">
                {/* lampshade */}
                <div
                    className={`light__LampshadeTop ${theme + "LampshadeTop"}`}
                ></div>
                <div
                    className={`light__LampshadeBottom ${
                        theme + "LampshadeBottom"
                    }`}
                ></div>
                {/* light effect */}
                <div className={`light__ampule ${theme + "Ampule"}`}></div>
                <div className={`${theme + "LightOne"}`}></div>
                {/* light support */}
                <div className={`light__armTop ${theme + "ArmTop"}`}></div>
                <div className={`light__armAxe ${theme + "ArmAxe"}`}></div>
                <div
                    className={`light__armBottom ${theme + "ArmBottom"}`}
                ></div>
                {/* light base */}
                <div>
                    <div className={`light__base ${theme + "Base"}`}></div>
                    <div
                        className={`light__base__top ${theme + "BaseTop"}`}
                    ></div>
                    <div
                        className={`light__base__bottom ${
                            theme + "BaseBottom"
                        }`}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default Light;
