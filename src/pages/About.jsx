//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

//---------------------------------------------------------
//components
//---------------------------------------------------------
//style for the Home page
import "../styles/pages/_about.scss";
import "../styles/pages/mediaQueriesPages/_mediaQueriesAbout.scss";
//---------------------------------------------------------
function Home() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="aboutScreen">
            <div className="aboutScreen__headerPage">
                <div className={`headerAbout ${theme}`}></div>
            </div>
            <div className={`aboutScreen__main ${theme}`}>
                <div className={`aboutMain ${theme}`}></div>
            </div>
        </div>
    );
}

export default Home;
