import Image from "next/image";
import styles from '../../styles/About.module.css';

const technologies = ["Apache Spark", "Python", "Java", "Linux", "RDBMS", "NoSQL"]

export default function About() {
  return (
    <div className={styles.container} id="About">
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.aboutHeader}>About me</h2>
          <p className={styles.aboutText}>
            I am a data engineer with experience in designing, building, and maintaining data systems. I have a strong background in computer science and experience with a variety of programming languages and tools. I am a quick learner and have a keen eye for detail. I am passionate about data and love working with it to find insights that can help improve businesses.
          </p>
        </div>
        <Image className={styles.image} src="/images/shahar.jpg" height={250} width={250} alt="Author image"/>
      </div>
      <div>
        <h3>Some of the technologies Ive worked with</h3>
        <ul className={styles.skillsList}>
          {technologies.map(technology => {
            return (
              <li key={technology} className={styles.skillItem}>
                {technology}
              </li>
            )
          })}
        </ul>
      </div>
    </div>

  );
}
