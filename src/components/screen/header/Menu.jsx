//---------------------------------------------------------
//import for the dark and white mode context and states
import { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { LangueContext } from "../../../contexts/LangueContext";

//---------------------------------------------------------
import { NavLink } from "react-router-dom";
//---------------------------------------------------------
//style
import "../../../styles/components/screen/Header/_menu.scss";

//---------------------------------------------------------
function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    if (langue === "french") {
        if (menuOpen === false) {
            return (
                <>
                    <div
                        onClick={() => setMenuOpen(true)}
                        className={`menu__container ${theme}`}
                    >
                        <div className={`menu__logo ${theme}`}>
                            <div
                                className={`menu__logo__topRod ${theme}`}
                            ></div>
                            <div
                                className={`menu__logo__bottomRod ${theme}`}
                            ></div>
                        </div>
                    </div>
                </>
            );
        }
        if (menuOpen === true) {
            return (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className={`menu__container__open ${theme}`}
                    >
                        <div className={`menu__logo__open ${theme}`}>
                            <div
                                className={`menu__logo__open__topRod ${theme}`}
                            ></div>
                            <div
                                className={`menu__logo__open__bottomRod ${theme}`}
                            ></div>
                        </div>
                        <div className={`menu__container__links ${theme}`}>
                            <NavLink
                                className={`menu__container__linkOne ${theme}`}
                                to="/home"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Acceuil
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkTwo ${theme}`}
                                to="/objectivs"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Objectifs
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkThree ${theme}`}
                                to="/skills"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Compétences
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkFour ${theme}`}
                                to="/projects"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Projets
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkFive ${theme}`}
                                to="/trainings"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Formations
                                </p>
                            </NavLink>
                        </div>
                    </div>
                </>
            );
        }
    }
    if (langue === "english") {
        if (menuOpen === false) {
            return (
                <>
                    <div
                        onClick={() => setMenuOpen(true)}
                        className={`menu__container ${theme}`}
                    >
                        <div className={`menu__logo ${theme}`}>
                            <div
                                className={`menu__logo__topRod ${theme}`}
                            ></div>
                            <div
                                className={`menu__logo__bottomRod ${theme}`}
                            ></div>
                        </div>
                    </div>
                </>
            );
        }
        if (menuOpen === true) {
            return (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className={`menu__container__open ${theme}`}
                    >
                        <div className={`menu__logo__open ${theme}`}>
                            <div
                                className={`menu__logo__open__topRod ${theme}`}
                            ></div>
                            <div
                                className={`menu__logo__open__bottomRod ${theme}`}
                            ></div>
                        </div>
                        <div className={`menu__container__links ${theme}`}>
                            <NavLink
                                className={`menu__container__linkOne ${theme}`}
                                to="/home"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Home
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkTwo ${theme}`}
                                to="/objectivs"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Objectivs
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkThree ${theme}`}
                                to="/skills"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Skills
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkFour ${theme}`}
                                to="/projects"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Projects
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkFive ${theme}`}
                                to="/trainings"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Trainings
                                </p>
                            </NavLink>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Menu;
