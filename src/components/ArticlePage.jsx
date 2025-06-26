import { getArticles } from "./getArticles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDateUTC } from "../utils/formatDate";

function ArticlePage() {
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getArticles(id)
      .then((body) => {
        console.log(body);
        const { article } = body;
        setArticleData(article);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<< error from getArticles");
      });
  }, [id]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <section className="articlePage">
        <h2>{articleData.title}</h2>
        <img src={articleData.article_img_url}></img>
        <p>{articleData.author}</p>
        <p>{articleData.body}</p>
        <p>{articleData.votes} votes</p>
        <p>{articleData.comment_count} comments</p>
        <p>{articleData.topic}</p>
        <p>{formatDateUTC(articleData.created_at)}</p>
      </section>
    </div>
  );
}
export default ArticlePage;
