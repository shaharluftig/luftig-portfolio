import Image from "next/image";
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container} id="About">
      <h2 >About me</h2>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nulla quia iure quasi. Aut ipsam quam perferendis suscipit tempora cumque, fugiat neque molestias pariatur odit deserunt!
        </p>
        <Image className={styles.image} src="/images/shahar.jpg" height={250} width={250} />
      </div>
    </div>

  );
}