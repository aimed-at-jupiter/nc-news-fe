import { getArticles } from "./getArticles";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    console.log("effect fired");
    setLoading(true);

    getArticles()
      .then((body) => {
        const { articles } = body;
        setLoading(false);
        setArticleData(articles);
      })
      .catch((err) => {
        console.log(err, "<<< error from getArticles");
      });
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {articleData.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default ArticlesList;
