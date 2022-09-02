import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [show, setShow] = useState<boolean>(true);
    const [lastScroll, setLastScroll] = useState<number>(0);

    const controlNavbar = () => {
        if (window.scrollY >= lastScroll) {
            setShow(false)
        } else {
            setShow(true)
        }
        setLastScroll(window.scrollY);
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScroll]);



    return (
        <nav className={styles.container} id="navbar">
            {show &&
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
                    <li className={styles.navItem}>
                        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
                            04. Contact
                        </Link>
                    </li>

                </ul>
            </div>}
        </nav>
    );

}