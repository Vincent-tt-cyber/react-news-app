import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import NewBanner from "../../components/NewBanner/NewBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {news.length > 0 && !isLoading ? (
        <Banner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
    </main>
  );
};

export default Main;
