//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//-----------------------------------------------------------
//style
import "../../styles/layout/_window.scss";
//-----------------------------------------------------------
function Window({ text }) {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`windowContainer ${theme}`}>
                <div className={`windowContainer__window ${theme}`}>
                    <div className={`windowContainer__tabContainer ${theme}`}>
                        <div
                            className={`windowContainer__tabMarginLeft ${theme}`}
                        ></div>
                        <div className={`windowContainer__tab ${theme}`}>
                            <p
                                className={`windowContainer__tab__text ${theme}`}
                            >
                                {text}
                            </p>
                        </div>
                        <div
                            className={`windowContainer__tabMarginRight ${theme}`}
                        >
                            <div
                                className={`windowContainer__tabMarginRight__cache ${theme}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Window;
