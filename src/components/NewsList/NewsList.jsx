import React from "react";
import styles from "./NewsList.module.css";

const NewsList = ({ news }) => {
  return (
    <div className={styles["news-list"]}>
      {news.map((item) => {
        return <li key={item.id}>{item.title}
        <p>{item.description}</p></li>;
      })}
    </div>
  );
};

export default NewsList;
