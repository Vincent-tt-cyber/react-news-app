import React from "react";
import { formateDate } from "../../helpers/formateDate";
import styles from "./Header.module.css";

// TODO: https://youtu.be/bD0UXb7kD_k?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=458

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS React</h1>
      <p className={styles.date}>{formateDate(new Date())}</p>
    </header>
  );
};

export default Header;
