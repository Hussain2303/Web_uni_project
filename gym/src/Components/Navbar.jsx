import React from 'react';
import style from './Navbar.module.css';
import backgroundImage from '../assets/pexels-didsss-1769735.jpg';
import logo from '../assets/logo-primary.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={style.container}>
            <img src={backgroundImage} className={style.backgroundImage} alt="Gym background" />

            <nav className={style.nav}>
                <NavLink to="/">
                    <img src={logo} alt="Logo" className={style.logo} />
                </NavLink>

                <ul className={style.ul1}>
                    <li className={style.l1}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? `${style.active} ${style.link}` : style.link
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={style.l1}>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive ? `${style.active} ${style.link}` : style.link
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className={style.l1}>
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) =>
                                isActive ? `${style.active} ${style.link}` : style.link
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className={style.l1}>
                        <NavLink
                            to="/Register"
                            className={({ isActive }) =>
                                isActive ? `${style.active} ${style.link}` : style.link
                            }
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>

                <div className={style.quoteBanner}>
                    <h1>Welcome to Muscle Hub</h1>
                    <p>Your fitness journey begins here. Stronger, better, and unstoppable!</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
