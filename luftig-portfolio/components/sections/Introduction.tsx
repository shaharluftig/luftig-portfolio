import styles from '../../styles/Introduction.module.css';



export default function Introduction() {
    return (
        <div className={styles.container} id="Introduction">
            <h2 className={styles.introduction}>Hi, my name is</h2>
            <h1 className={styles.fullName}>Shahar Luftig.</h1>
            <h1 className={styles.subIntro}>I build great software</h1>
            <p className={styles.subDescription}>
                I`m Experienced Data Engineer with design and development experience on end to end, large - scale ETL pipelines using a variety of big data technologies and programming languages.</p>
        </div>
    )

}