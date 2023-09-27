//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LangueContext } from "../../contexts/LangueContext";
//---------------------------------------------------------
//import react-router-dom for the links navigation
import { NavLink } from "react-router-dom";

//--------------------------------------------------
//style
import "../../styles/pages/wait/_wait.scss";
import "../../styles/pages/wait/MediaWait/_wait_media_queries.scss";

//--------------------------------------------------
//image
//--------------------------------------------------
function WaitProject() {
    // Context for theme and langue
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            //background of the page
            <div className={`waitBack ${theme}`}>
                {/* container with the page elements */}
                <div className={`waitContainer ${theme}`}>
                    {/* container in the center */}
                    <div className={`waitContainer__content ${theme}`}>
                        {/* title */}
                        <h1>Cette pages n&apos;est pas encore disponible.</h1>

                        {/* image of the page */}
                        <div
                            className={`waitContainer__content__image ${theme}`}
                        ></div>

                        {/* text under the image */}
                        <p>
                            Cette page web actuellement en cours de
                            développement est sera disponible très
                            prochainement.
                            <br />
                            Vous désirez en savoir plus sur mes projets,
                            n&apos;hésitez pas à regarder mon GitHub.
                        </p>

                        {/* link for the resume page */}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/G-Etienne?tab=repositories"
                            className={`waitContainer__content__link ${theme}`}
                        >
                            Mes projets
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    //english part part
    if (langue === "english") {
        return (
            //background of the page
            <div className={`waitBack ${theme}`}>
                {/* container with the page elements */}
                <div className={`waitContainer ${theme}`}>
                    {/* container in the center */}
                    <div className={`waitContainer__content ${theme}`}>
                        {/* title */}
                        <h1>This page is not yet available.</h1>

                        {/* image of the page */}
                        <div
                            className={`waitContainer__content__image ${theme}`}
                        ></div>

                        {/* text under the image */}
                        <p>
                            This web page is currently under development and
                            will be available very soon.
                            <br />
                            If you&apos;d like to learn more about my projects,
                            please don&apos;t hesitate to check out my GitHub.
                        </p>
                        {/* link for the resume page */}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/G-Etienne?tab=repositories"
                            className={`waitContainer__content__link ${theme}`}
                        >
                            My projects
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaitProject;
