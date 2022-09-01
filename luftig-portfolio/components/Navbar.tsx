import { Component } from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import styles from '../styles/Navbar.module.css';

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className={styles.container} id="navbar">
                <div className="nav-content">
                    <ul className={styles.navItems}>
                        <li className={styles.navItem}>
                            <Link activeClass="active" to="Introduction" spy={true} smooth={true} offset={-70} duration={500}>
                                01. Introduction
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                                02. About
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link activeClass="active" to="Experience" spy={true} smooth={true} offset={-70} duration={500}>
                                03. Experience
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}