//---------------------------------------------------------
//import of the context
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//style
import "../styles/pages/_trainings.scss";
import "../styles/pages/mediaQueriesPages/_trainingsMediaQueries.scss";

//---------------------------------------------------------
//image
import laptop from "../assets/Trainings/web-trainings-laptop.jpg";
import laptopIllustration from "../assets/Trainings/web-trainings-illustration-laptop.jpg";
import carpenterIllustration from "../assets/Trainings/carpenter-trainings-illustration.jpg";

//---------------------------------------------------------
function Trainings() {
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            <div>
                {/* page trainings */}
                <div className={`trainingsScreen ${theme}`}>
                    {/* header trainings */}
                    <div className="trainingsScreen__headerPage"></div>

                    {/* main part trainings */}
                    <div className={`trainingsScreen__main ${theme}`}>
                        {/* bloc in the center of the trainings page */}
                        <div className={`trainingsMain ${theme}`}>
                            {/* web trainings */}
                            <div className={`trainingsMain__web ${theme}`}>
                                {/* image part */}
                                <img
                                    className={`trainingsMain__web__imageOne ${theme}`}
                                    src={laptop}
                                    alt="laptop web trainings"
                                />
                                <img
                                    className={`trainingsMain__web__imageTwo ${theme}`}
                                    src={laptopIllustration}
                                    alt="illustration web trainings"
                                />

                                {/* decorativ bublle */}
                                <div
                                    className={`trainingsMain__web__decorativOne ${theme}`}
                                ></div>

                                {/* text part */}
                                <div
                                    className={`trainingsMain__web__textContainer ${theme}`}
                                >
                                    {/* square like a border */}
                                    <div
                                        className={`trainingsMain__web__decorativSquare ${theme}`}
                                    ></div>

                                    <h2>Développeur Intégrateur Web</h2>

                                    <h4>
                                        Formation diplômante / Enseignement
                                        collégial
                                    </h4>

                                    <p
                                        className={`trainingsMain__web__textContainer__center ${theme}`}
                                    >
                                        Centre de foramtion : OpenClassRooms{" "}
                                        <br />
                                        Formation à distance. France, 2022 /
                                        2023
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed non risus.
                                        Suspendisse lectus tortor, dignissim sit
                                        amet, adipiscing nec, ultricies sed,
                                        dolor. Cras elementum ultrices diam.
                                        Maecenas ligula massa, varius a, semper
                                        congue, euismod non, mi. Proin
                                        porttitor, orci nec nonummy molestie,
                                        enim est eleifend mi, non fermentum diam
                                        nisl sit amet erat. Duis semper. Duis
                                        arcu massa, scelerisque vitae, consequat
                                        in, pretium a, enim. Pellentesque
                                        congue.
                                    </p>

                                    {/* decorativ bubulles */}
                                    <div
                                        className={`trainingsMain__web__decorativTwo ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativThree ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativFour ${theme}`}
                                    ></div>
                                </div>
                            </div>

                            {/* carpenter part */}
                            <div
                                className={`trainingsMain__carpenter ${theme}`}
                            >
                                {/* text and image part */}
                                <div
                                    className={`trainingsMain__carpenter__textContainer ${theme}`}
                                >
                                    {/* square like a border */}
                                    <div
                                        className={`trainingsMain__carpenter__decorativSquare ${theme}`}
                                    ></div>

                                    {/* text */}
                                    <h2>Charpentier / Ébéniste</h2>

                                    <h4>Formation : Charpentier et Ébéniste</h4>
                                    <p
                                        className={`trainingsMain__carpenter__textContainer__center ${theme}`}
                                    >
                                        Expérience de 10ans avant ma
                                        reconvertion.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed non risus.
                                        Suspendisse lectus tortor, dignissim sit
                                        amet, adipiscing nec, ultricies sed,
                                        dolor. Cras elementum ultrices diam.
                                        Maecenas ligula
                                    </p>
                                </div>

                                <div
                                    className={`trainingsMain__carpenter__image ${theme}`}
                                >
                                    {/* illustration */}
                                    <img
                                        src={carpenterIllustration}
                                        alt="image for illustring the carpenter part."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //english part
    if (langue === "english") {
        return (
            <div>
                {/* page trainings */}
                <div className={`trainingsScreen ${theme}`}>
                    {/* header trainings */}
                    <div className="trainingsScreen__headerPage"></div>

                    {/* main part trainings */}
                    <div className={`trainingsScreen__main ${theme}`}>
                        {/* bloc in the center of the trainings page */}
                        <div className={`trainingsMain ${theme}`}>
                            {/* web trainings */}
                            <div className={`trainingsMain__web ${theme}`}>
                                {/* image part */}
                                <img
                                    className={`trainingsMain__web__imageOne ${theme}`}
                                    src={laptop}
                                    alt="laptop web trainings"
                                />
                                <img
                                    className={`trainingsMain__web__imageTwo ${theme}`}
                                    src={laptopIllustration}
                                    alt="illustration web trainings"
                                />

                                {/* decorativ bublle */}
                                <div
                                    className={`trainingsMain__web__decorativOne ${theme}`}
                                ></div>

                                {/* text part */}
                                <div
                                    className={`trainingsMain__web__textContainer ${theme}`}
                                >
                                    {/* square like a border */}
                                    <div
                                        className={`trainingsMain__web__decorativSquare ${theme}`}
                                    ></div>

                                    <h2>Web Developer and Integrator</h2>

                                    <h4>Diploma Program / College Education</h4>

                                    <p
                                        className={`trainingsMain__web__textContainer__center ${theme}`}
                                    >
                                        Training Center: OpenClassrooms
                                        <br />
                                        Remote Training. France, 2022 / 2023
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed non risus.
                                        Suspendisse lectus tortor, dignissim sit
                                        amet, adipiscing nec, ultricies sed,
                                        dolor. Cras elementum ultrices diam.
                                        Maecenas ligula massa, varius a, semper
                                        congue, euismod non, mi. Proin
                                        porttitor, orci nec nonummy molestie,
                                        enim est eleifend mi, non fermentum diam
                                        nisl sit amet erat. Duis semper. Duis
                                        arcu massa, scelerisque vitae, consequat
                                        in, pretium a, enim. Pellentesque
                                        congue.
                                    </p>

                                    {/* decorativ bubulles */}
                                    <div
                                        className={`trainingsMain__web__decorativTwo ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativThree ${theme}`}
                                    ></div>
                                    <div
                                        className={`trainingsMain__web__decorativFour ${theme}`}
                                    ></div>
                                </div>
                            </div>

                            {/* carpenter part */}
                            <div
                                className={`trainingsMain__carpenter ${theme}`}
                            >
                                {/* text and image part */}
                                <div
                                    className={`trainingsMain__carpenter__textContainer ${theme}`}
                                >
                                    {/* suare like a border */}
                                    <div
                                        className={`trainingsMain__carpenter__decorativSquare ${theme}`}
                                    ></div>

                                    {/* text */}
                                    <h2>Carpenter / Cabinetmaker</h2>

                                    <h4>
                                        Training: Carpenter and Cabinetmaker
                                    </h4>
                                    <p
                                        className={`trainingsMain__carpenter__textContainer__experience ${theme}`}
                                    >
                                        10 years of experience prior to my
                                        career transition.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed non risus.
                                        Suspendisse lectus tortor, dignissim sit
                                        amet, adipiscing nec, ultricies sed,
                                        dolor. Cras elementum ultrices diam.
                                        Maecenas ligula
                                    </p>
                                </div>
                                <div
                                    className={`trainingsMain__carpenter__image ${theme}`}
                                >
                                    {/* illustration */}
                                    <img
                                        src={carpenterIllustration}
                                        alt="image for illustring the carpenter part."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trainings;
