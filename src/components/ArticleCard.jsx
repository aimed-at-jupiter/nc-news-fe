import { Link } from "react-router";
function ArticleCard({ article }) {
  return (
    <Link to={`/api/articles/${article.article_id}`}>
      <section className="articleCard">
        <img src={article.article_img_url}></img>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
        <p>{article.topic}</p>
        <p>{article.created_at}</p>
      </section>
    </Link>
  );
}
export default ArticleCard;
