//---------------------------------------------------------
//import for the dark and white mode context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

//--------------------------------------------------
import "../../styles/components/screen/_back.scss";

//--------------------------------------------------
function Back() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`backSide ${theme}`}></div>
            <div className={`backAnim ${theme}`}>
                <div className={`dot__one ${theme}`}>
                    <div className={`dot__ancor__one ${theme}`}>
                        <div className={`rod__one ${theme}`}>
                            <div className={`dot__two ${theme}`}>
                                <div className={`rod__two ${theme}`}>
                                    <div className={`dot__three ${theme}`}>
                                        <div className={`rod__three ${theme}`}>
                                            <div
                                                className={`specialRod__one ${theme}`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`dot__ancor__two ${theme}`}>
                        <div className={`rod__one ${theme}`}>
                            <div className={`dot__two ${theme}`}>
                                <div className={`rod__two ${theme}`}>
                                    <div className={`dot__three ${theme}`}>
                                        <div
                                            className={`rod__three ${theme}`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`dot__ancor__three ${theme}`}>
                        <div className={`rod__one ${theme}`}>
                            <div className={`dot__two ${theme}`}>
                                <div className={`rod__two ${theme}`}>
                                    <div className={`dot__three ${theme}`}>
                                        <div
                                            className={`rod__three ${theme}`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`rod__one ${theme}`}>
                        <div className={`dot__two ${theme}`}>
                            <div className={`rod__two ${theme}`}>
                                <div className={`dot__three ${theme}`}>
                                    <div
                                        className={`rod__three ${theme}`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Back;
