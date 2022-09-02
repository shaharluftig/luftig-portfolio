import styles from '../../styles/Contact.module.css';
import config from '../../config'

export default function Contact() {
    const handleEmailButton = () => {
        window.location.assign(`mailto:${config.links.email}`)
    }
    return (
        <div className={styles.container} id="Contact">
            <h1 className={styles.getInTouch}>Get in touch</h1>
            <p className={styles.contactText}>Currently, Im not looking for a job, but my inbox is always open</p>
            <button onClick={() => handleEmailButton()} className={styles.emailButton}>
                Say hi
            </button>
        </div>

    );
}