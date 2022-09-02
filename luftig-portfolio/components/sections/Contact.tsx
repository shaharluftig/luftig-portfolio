import styles from '../../styles/Contact.module.css';
import config from '../../../config'

export default function Contact() {
    const handleEmailButton = () => {
        window.location.assign(`mailto:${config.links.email}`)
    }
    return (
        <div className={styles.container} id="Contact">
            <h1 className={styles.getInTouch}>Get in touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum aspernatur impedit perspiciatis quo nostrum reiciendis hic recusandae mollitia ducimus.</p>
            <button onClick={() => handleEmailButton()} className={styles.emailButton}>
                Say hi
            </button>
        </div>

    );
}