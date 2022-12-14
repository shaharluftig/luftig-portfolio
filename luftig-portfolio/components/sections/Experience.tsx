import { useState } from 'react';
import styles from '../../styles/Experience.module.css';

interface jobs {
    [key: string]: string[],
}[]

const experienceHistory: jobs = {
    "Matmon Course": ["IDF Data Enginner course"],
    "Data Enginner": ["Design and develop end to end large - scale ETL pipelines using a variety of big data technologies and programming languages.", "Leading a variety of projects", "Trained 10 new team members"],
    "Data Engineer Team Lead": ["Managing a team of 10 members", "Professional guidance of the team members", "Agile project management with Scrum","Engineering and development of 18 ETL piplines"],
    "Data Developer Team Lead": ["Managing a team of 12 members", "Professional guidance of the team members", "Agile project management with Scrum","Management and development of several key systems used by thousands of users"]
}
export default function Experience() {
    const [currentJob, setCurrentJob] = useState(Object.keys(experienceHistory)[0])

    const handleJobClick = (job: string) => {
        setCurrentJob(job)
    }

    return (
        <div>
            <div className={styles.container} id="Experience">
                <h2 >Where I`ve Worked</h2>
                <div className={styles.experienceContainer}>
                    <ul className={styles.jobsList}>
                        {Object.keys(experienceHistory).map(job => {
                            if (job === currentJob) {
                                return <li className={styles.activeJob} key={job} onClick={() => handleJobClick(job)}>{job}</li>
                            }
                            return <li className={styles.jobItem} key={job} onClick={() => handleJobClick(job)}>{job}</li>
                        })}
                    </ul>
                    <ul className={styles.jobDescriptionList}>
                        {experienceHistory[currentJob].map((description, index) => {
                            return (
                                <li key={index} className={styles.jobDescriptionItem}>{description}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div >
    )
}