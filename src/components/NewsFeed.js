import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000",
    };

    axios
      .request(options)
      .then(function (response) {
        setArticles(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const firstSevenArticles = articles?.splice(0, 7);
  // console.log(articles?.splice(0, 7));
  return (
    <div className="news-feed">
      <h2>NewsFeed</h2>
      {firstSevenArticles?.splice(0, 7).map((article, index) => (
        <div key={`${article}${index}`}>
          <a href={article.url}>{article.title}</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
