import React from "react";
import styles from "./skills.module.css";

function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>
        Skills
      </h2>
      <ul className={styles.skillsList}>
        <li className={styles.skillsItem}>Have learned and used both front end and backend in react js.</li>
        <li className={styles.skillsItem}>mongoDB and database handling</li>
        <li className={styles.skillsItem}>programming knowledges in C++, Java and python.</li>
      </ul>
    </section>
  );    
}

export default Skills;