//---------------------------------------------------------
//import of the context and states
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangueContext } from "../contexts/LangueContext";

//---------------------------------------------------------
//font awesome with some icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//---------------------------------------------------------
//style
import "../styles/pages/_goals.scss";
import "../styles/pages/mediaQueriesPages/_goalsMediaQueries.scss";

//---------------------------------------------------------
//image
import Learning from "../assets/Goals/front-front-store-learning.jpg";
import Team from "../assets/Goals/front-frontstore-team.jpg";
import Evolution from "../assets/Goals/front-frontstore-evolution.jpg";

//---------------------------------------------------------
function Goals() {
    //state for open the objectives
    const [openOne, setOpenOne] = useState("close");
    const [openTwo, setOpenTwo] = useState("close");
    const [openThree, setOpenThree] = useState("close");

    //langue and theme
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    //french part
    if (langue === "french") {
        return (
            <div>
                {/* page goals */}
                <div className={`goalScreen ${theme}`}>
                    {/* header goals */}
                    <div className="goalScreen__headerPage">
                        <div className={`headerGoal ${theme}`}></div>
                    </div>

                    {/* main part goals */}
                    <div className={`goalScreen__main ${theme}`}>
                        <div className={`goalMain ${theme}`}>
                            {/* title */}
                            <h1 className={`goalMain__goalTitle ${theme}`}>
                                Objectifs
                            </h1>

                            {/* Objectivs */}
                            <div className={`goalMain__goalContainer ${theme}`}>
                                {/* firts block */}
                                <div className={`goalMain__firstGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenOne("open")}
                                        className={`goalMain__firstGoal__storeFront ${theme} ${openOne}`}
                                    >
                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Learning}
                                            alt="truc"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Toujours plus compétent !
                                        </h2>

                                        {/* fake button */}
                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Découvrir l&apos;objectif !
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenOne("close")}
                                        className={`goalMain__firstGoal__textGoal ${theme} ${openOne}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <h3>Aller plus loin !</h3>

                                        <p>
                                            En tant que développeur web, il est
                                            primordial de rester constamment à
                                            l&apos;affût des nouvelles
                                            technologies et méthodes.
                                            <br />
                                            <br />
                                            Mon objectif est d&apos;approfondir
                                            en permanence ma compréhension et
                                            mes compétences pour garantir des
                                            résultats de haute qualité tout en
                                            maximisant l&apos;efficacité.
                                            <br />
                                            <br />
                                            Ainsi, j&apos;évolue tout en
                                            accomplissant au mieux les missions
                                            qui me sont confiées.
                                            <br />
                                        </p>
                                    </div>
                                </div>

                                {/* second block */}
                                <div
                                    className={`goalMain__secondGoal ${theme}`}
                                >
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenTwo("open")}
                                        className={`goalMain__secondGoal__storeFront ${theme} ${openTwo}`}
                                    >
                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Team}
                                            alt="truc"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Comprendre l&apos;équipe !
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Découvrir l&apos;objectif !
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenTwo("close")}
                                        className={`goalMain__secondGoal__textGoal ${theme} ${openTwo}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <h3>
                                            C&apos;est enssemble qu&apos;on
                                            avance !
                                        </h3>

                                        <p>
                                            Pour ma part, le travail
                                            d&apos;équipe revêt une importance
                                            primordiale.
                                            <br />
                                            <br />
                                            Imaginez une équipe solide, avançant
                                            de concert sur les projets : <br />
                                            c&apos;est, à mon avis, la meilleure
                                            manière de grandir tout en
                                            appréciant pleinement son quotidien.
                                            <br />
                                            <br />
                                            Mon objectif ? M&apos;intégrer au
                                            mieux dans une équipe et trouver ma
                                            place idéale pour une contribution
                                            optimale.
                                        </p>
                                    </div>
                                </div>

                                {/* third block */}
                                <div className={`goalMain__thirdGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenThree("open")}
                                        className={`goalMain__thirdGoal__storeFront ${theme} ${openThree}`}
                                    >
                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Evolution}
                                            alt="truc"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Évoluer !
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Découvrir l&apos;objectif !
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenThree("close")}
                                        className={`goalMain__thirdGoal__textGoal ${theme} ${openThree}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <h3>Gravir les échellons !</h3>

                                        <p>
                                            Mon objectif majeur est de
                                            satisfaire ma curiosité insatiable
                                            vis-à-vis du monde du web et du
                                            graphisme.
                                            <br />
                                            <br />
                                            Monter les échelons me permettra
                                            toujours de dénicher de nouveaux
                                            aspects passionnants de mon métier !
                                            <br />
                                            <br />
                                            Les défis qui se présentent seront
                                            les moteurs de ma réussite, aucun
                                            doute là-dessus.
                                        </p>
                                    </div>
                                </div>

                                <div className="fakeBlockBottom"></div>
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
                {/* page goals */}
                <div className={`goalScreen ${theme}`}>
                    {/* header goals */}
                    <div className="goalScreen__headerPage">
                        <div className={`headerGoal ${theme}`}></div>
                    </div>

                    {/* main part goals */}
                    <div className={`goalScreen__main ${theme}`}>
                        {/* main part */}
                        <div className={`goalMain ${theme}`}>
                            {/* title */}
                            <h1 className={`goalMain__goalTitle ${theme}`}>
                                Goals
                            </h1>

                            {/* Objectivs */}
                            <div className={`goalMain__goalContainer ${theme}`}>
                                {/* firts block */}
                                <div className={`goalMain__firstGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenOne("open")}
                                        className={`goalMain__firstGoal__storeFront ${theme} ${openOne}`}
                                    >
                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Learning}
                                            alt="truc"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Always more competent !
                                        </h2>

                                        {/* fake button */}
                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Discover the objective!
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenOne("close")}
                                        className={`goalMain__firstGoal__textGoal ${theme} ${openOne}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <h3>Go further!</h3>

                                        <p>
                                            As a web developer, it&apos;s
                                            crucial to always stay attuned to
                                            new technologies and methods.
                                            <br />
                                            <br />
                                            My goal is to continually deepen my
                                            understanding and skills, ensuring
                                            high-quality results while
                                            maximizing efficiency.
                                            <br />
                                            <br />
                                            This way, I evolve while excelling
                                            in the tasks entrusted to me.
                                        </p>
                                    </div>
                                </div>

                                {/* second block */}
                                <div
                                    className={`goalMain__secondGoal ${theme}`}
                                >
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenTwo("open")}
                                        className={`goalMain__secondGoal__storeFront ${theme} ${openTwo}`}
                                    >
                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Team}
                                            alt="truc"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Understanding the team!
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Discover the objective!
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenTwo("close")}
                                        className={`goalMain__secondGoal__textGoal ${theme} ${openTwo}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <h3>
                                            It&apos;s together that we move
                                            forward!
                                        </h3>

                                        <p>
                                            For my part, teamwork holds
                                            paramount importance.
                                            <br />
                                            <br />
                                            Picture a solid team, moving in
                                            harmony on projects:
                                            <br />
                                            In my opinion, it&apos;s the best
                                            way to grow while fully enjoying
                                            daily life.
                                            <br />
                                            <br />
                                            My goal? To integrate myself
                                            seamlessly into a team and find my
                                            ideal spot for optimal contribution.
                                        </p>
                                    </div>
                                </div>

                                {/* third block */}
                                <div className={`goalMain__thirdGoal ${theme}`}>
                                    {/* block closed */}
                                    {/* visible block */}
                                    <div
                                        onClick={() => setOpenThree("open")}
                                        className={`goalMain__thirdGoal__storeFront ${theme} ${openThree}`}
                                    >
                                        <img
                                            className={`goalMain__goalContainer__image ${theme}`}
                                            src={Evolution}
                                            alt="truc"
                                        />

                                        <h2
                                            className={`goalMain__goalContainer__title ${theme}`}
                                        >
                                            Evolve !
                                        </h2>

                                        <div
                                            className={`goalMain__goalContainer__clic ${theme}`}
                                        >
                                            Discover the objective!
                                        </div>
                                    </div>

                                    {/* hide block */}
                                    <div
                                        onClick={() => setOpenThree("close")}
                                        className={`goalMain__thirdGoal__textGoal ${theme} ${openThree}`}
                                    >
                                        {/* cross icone */}
                                        <div>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>

                                        <h3>Climb the ranks !</h3>

                                        <p>
                                            My main objective is to satisfy my
                                            insatiable curiosity towards the
                                            world of web and graphic design.
                                            <br />
                                            <br />
                                            Climbing the ranks will consistently
                                            allow me to uncover new exciting
                                            facets of my profession!
                                            <br />
                                            <br />
                                            The challenges that come my way will
                                            be the engines of my success, no
                                            doubt about that.
                                        </p>
                                    </div>
                                </div>

                                <div className="fakeBlockBottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;
