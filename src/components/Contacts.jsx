import React from "react";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <section className={styles.contactsSection}>
      <h2 className={styles.contactsTitle}>
        Contact me
      </h2>
      <ul className={styles.contactsList}>
        <li className={styles.contactsItem}>
          Email : aungkg2468@gmail.com
        </li>
        <li className={styles.contactsItem}>
          github : https://github.com/d3nisacookies
        </li>
      </ul>
    </section>
  );
}

export default Contacts;