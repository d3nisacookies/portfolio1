import React from "react";
import styles from './About.module.css';

function About(){
    return(
        <section className={styles.container}>
            <h2 className={styles.header}>
                About me!
            </h2>
            <p className={styles.content}>
                Hello. I am Aung Kaung and i am studying Big Data from university of Wollongong Sim. I am expected to graduate in 2024.
                Here are things about me and what i am capable of.
            </p>
        </section>
    );
};

export default About;