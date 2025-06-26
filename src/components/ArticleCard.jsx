import { Link } from "react-router";
import { formatDateUTC } from "../utils/formatDate";
function ArticleCard({ article }) {
  const prettyDate = formatDateUTC(article.created_at);

  return (
    <Link to={`/articles/${article.article_id}`}>
      <section id={`card ${article.article_id}`} className="articleCard">
        <img src={article.article_img_url}></img>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
        <p>{article.topic}</p>
        <p>{prettyDate}</p>
      </section>
    </Link>
  );
}
export default ArticleCard;
