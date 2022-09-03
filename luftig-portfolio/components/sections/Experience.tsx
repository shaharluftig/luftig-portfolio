import styles from '../../styles/Experience.module.css';


export default function Experience() {
    return (
        <div>
            <div className={styles.container} id="Experience">
                <h2 >Where I`ve Worked</h2>
                <h3>IDF</h3>
                <ul className={styles.about}>
                    <li>
                        Data Enginner
                    </li>
                    <li>
                        Officers Course
                    </li>
                    <li>
                        Data enginner team lead
                    </li>
                    <li>
                        Data devlopers team lead
                    </li>
                </ul>
            </div>

        </div>
    )
}