import styles from '../styles/Footer.module.css';
import config from '../config';
export default function Footer() {

    return (
        <div className={styles.container}>
            <span><a href={config.links.portfolioGit}>Created by Shahar Luftig</a></span>
        </div >
    )
}