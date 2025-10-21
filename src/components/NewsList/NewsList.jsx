import React from "react";
import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
  console.log(news);
  
  return (
    <div className={styles["news-list"]}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default NewsList;
