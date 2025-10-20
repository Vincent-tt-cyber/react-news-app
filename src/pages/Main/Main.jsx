import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import NewBanner from "../../components/NewBanner/NewBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        console.log(news);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
