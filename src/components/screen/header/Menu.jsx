//---------------------------------------------------------
//import for the dark and white mode and langue context and states
import { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { LangueContext } from "../../../contexts/LangueContext";

//---------------------------------------------------------
//import react-router-dom for the links navigation
import { NavLink } from "react-router-dom";
//---------------------------------------------------------
//styles
import "../../../styles/components/screen/Header/_menu.scss";
import "../../../styles/components/screen/Header/headerMedia/_menuMediaQueries.scss";

//---------------------------------------------------------
function Menu() {
    {
        /* state to open the menu, theme and langue context */
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const { langue } = useContext(LangueContext);

    {
        /* code when the site is in french */
    }
    if (langue === "french") {
        {
            /* when the menu is close */
        }
        if (menuOpen === false) {
            return (
                <>
                    {/* menu button */}
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

        {
            /*when the menu is open */
        }
        if (menuOpen === true) {
            return (
                <>
                    {/* menu button */}
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

                        {/* links of the menu */}
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
                                    Accueil
                                </p>
                            </NavLink>

                            <NavLink
                                className={`menu__container__linkTwo ${theme}`}
                                to="/goals"
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
    //---------------------------------------------------------------
    {
        /* code when the site is in english */
    }
    if (langue === "english") {
        {
            /* when the menu is close */
        }
        if (menuOpen === false) {
            return (
                <>
                    {/* menu button */}
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

        {
            /*when the menu is open */
        }
        if (menuOpen === true) {
            return (
                <>
                    {/* menu button */}
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

                        {/* links of the menu */}
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
                                to="/goals"
                            >
                                <div
                                    className={`menu__container__link__anim ${theme}`}
                                ></div>
                                <p
                                    className={`menu__container__link__text ${theme}`}
                                >
                                    Goals
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
