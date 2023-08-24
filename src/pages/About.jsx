//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//components
//---------------------------------------------------------
//style for the Home page
import "../styles/pages/_about.scss";
import "../styles/pages/mediaQueriesPages/_mediaQueriesAbout.scss";

//---------------------------------------------------------
function Home() {
    //context for the langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            // part for placing the on the virtual screen
            <div className="aboutScreen">
                {/* header about */}
                <div className="aboutScreen__headerPage">
                    <div className={`headerAbout ${theme}`}></div>
                </div>

                {/* main part about */}
                <div className={`aboutScreen__main ${theme}`}>
                    <div className={`aboutMain ${theme}`}>
                        {/* part on the top of the about page (links, big title, picture) */}
                        <div className={`aboutMain__containerTop ${theme}`}>
                            <div
                                className={`aboutMain__containerTop__menu ${theme}`}
                            >
                                <a href="#WhoIAm">Qui suis-je ?</a>

                                <a href="#Web">Le Web </a>

                                <a href="#Bottom">Avant le Web </a>
                            </div>

                            <h3
                                className={`aboutMain__containerTop__title ${theme}`}
                            >
                                TOUT <br />
                                SUR <br />
                                MOI...
                            </h3>

                            <div
                                className={`aboutMain__containerTop__image ${theme}`}
                            ></div>
                        </div>

                        {/* part about etienne */}
                        <div
                            id="WhoIAm"
                            className={`aboutMain__containerWhoIAm ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWhoIAm__title ${theme}`}
                            >
                                Qui <br />
                                suis-je ?
                            </h2>

                            <div
                                className={`aboutMain__containerWhoIAm__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWhoIAm__textPart__text ${theme}`}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                </p>
                            </div>
                        </div>

                        {/* part about the web */}
                        <div
                            id="Web"
                            className={`aboutMain__containerWeb ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWeb__title ${theme}`}
                            >
                                Pour moi, <br />
                                le web ...
                            </h2>

                            <div
                                className={`aboutMain__containerWeb__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWeb__textPart__text ${theme}`}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                </p>
                            </div>
                        </div>

                        {/* part about wath etienne do befor the web */}
                        <div
                            id="Bottom"
                            className={`aboutMain__containerBottom ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerBottom__title ${theme}`}
                            >
                                Ma vie <br />
                                avant le Web
                            </h2>

                            <div
                                className={`aboutMain__containerBottom__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerBottom__textPart__text ${theme}`}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                </p>
                            </div>
                        </div>

                        {/* fake footer for good style */}
                        <div className={`aboutFakeFooter ${theme}`}></div>
                    </div>
                </div>
            </div>
        );
    }

    //english part
    if (langue === "english") {
        return (
            // part for placing the on the virtual screen
            <div className="aboutScreen">
                {/* header about */}
                <div className="aboutScreen__headerPage">
                    <div className={`headerAbout ${theme}`}></div>
                </div>

                {/* main part about */}
                <div className={`aboutScreen__main ${theme}`}>
                    <div className={`aboutMain ${theme}`}>
                        {/* part on the top of the about page (links, big title, picture) */}
                        <div className={`aboutMain__containerTop ${theme}`}>
                            <div
                                className={`aboutMain__containerTop__menu ${theme}`}
                            >
                                <a href="#WhoIAm">Who am I ...</a>

                                <a href="#Web">The Web ...</a>

                                <a href="#Bottom">Before the Web ...</a>
                            </div>

                            <h3
                                className={`aboutMain__containerTop__title ${theme}`}
                            >
                                ALL <br />
                                ABOUT <br />
                                ME...
                            </h3>

                            <div
                                className={`aboutMain__containerTop__image ${theme}`}
                            ></div>
                        </div>

                        {/* part about etienne */}
                        <div
                            id="WhoIAm"
                            className={`aboutMain__containerWhoIAm ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWhoIAm__title ${theme}`}
                            >
                                Who <br />
                                am I ?
                            </h2>

                            <div
                                className={`aboutMain__containerWhoIAm__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWhoIAm__textPart__text ${theme}`}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                </p>
                            </div>
                        </div>

                        {/* part about the web */}
                        <div
                            id="Web"
                            className={`aboutMain__containerWeb ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerWeb__title ${theme}`}
                            >
                                For me, <br />
                                the web ...
                            </h2>

                            <div
                                className={`aboutMain__containerWeb__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerWeb__textPart__text ${theme}`}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                </p>
                            </div>
                        </div>

                        {/* part about wath etienne do befor the web */}
                        <div
                            id="Bottom"
                            className={`aboutMain__containerBottom ${theme}`}
                        >
                            <h2
                                className={`aboutMain__containerBottom__title ${theme}`}
                            >
                                My life <br />
                                before the Web
                            </h2>

                            <div
                                className={`aboutMain__containerBottom__textPart ${theme}`}
                            >
                                <p
                                    className={`aboutMain__containerBottom__textPart__text ${theme}`}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                </p>
                            </div>
                        </div>

                        {/* fake footer for good style */}
                        <div className={`aboutFakeFooter ${theme}`}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
