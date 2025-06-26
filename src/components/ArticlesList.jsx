import { getArticles } from "./getArticles";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [loading, setLoading] = useState(false);
  const [allArticlesData, setAllArticlesData] = useState([]);

  useEffect(() => {
    setLoading(true);

    getArticles()
      .then((body) => {
        const { articles } = body;
        setAllArticlesData(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<< error from getArticles");
      });
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {allArticlesData.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default ArticlesList;
