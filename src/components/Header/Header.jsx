import React from "react";
import { formateDate } from "../../helpers/formateDate";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS React</h1>
      <p className={styles.date}>{formateDate(new Date())}</p>
    </header>
  );
};

export default Header;
