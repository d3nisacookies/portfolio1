import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>
        Projects
      </h2>
      <ul className={styles.projectsList}>
        <li className={styles.projectsItem}>
          <a href="https://drive.google.com/drive/folders/1kfg8ILp-vRr8U1D7ZnoDvgnMYmmM8SKi?usp=sharing">Pet adoption website</a>
        </li>
        <li className={styles.projectsItem}>
          <a href="https://drive.google.com/file/d/1P9YHvL36XlxVlk0lPfpI0LpjeK-itZFk/view?usp=drive_link">Examples of database implementation and manipulation</a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;