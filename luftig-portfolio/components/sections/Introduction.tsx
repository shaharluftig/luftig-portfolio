import styles from '../../styles/Introduction.module.css';



export default function Introduction() {
    return (
        <div className={styles.container} id="Introduction">
            <h2 className={styles.introduction}>Hi, my name is</h2>
            <h1 className={styles.fullName}>Shahar Luftig.</h1>
            <h1 className={styles.subIntro}>I build great software</h1>
            <p className={styles.subDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti quisquam sequi necessitatibus ad
                , reprehenderit ut incidunt laborum cupiditate? Iure,voluptatum. Commodi, perspiciatis omnis! Sunt atque
                non fugiat perspiciatis sed!</p>
        </div>
    )

}