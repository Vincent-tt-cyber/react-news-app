import React from "react";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./NewBanner.module.css";
const NewBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewBanner;
