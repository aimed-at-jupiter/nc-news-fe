import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "./getArticles";
import { getComments } from "./getComments";
import { formatDateUTC } from "../utils/formatDate";
import { postComment } from "./postComment";
import { CommentForm } from "./CommentForm";
import CommentsSection from "./CommentsSection";
import { patchArticleVotes } from "./patchArticleVotes";

function ArticlePage() {
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState({});
  const [commentsData, setCommentsData] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [articleVotes, setArticleVotes] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getArticles(id)
      .then((body) => {
        const { article } = body;
        setArticleData(article);
        setArticleVotes(article.votes);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<< error from getArticles");
      });
  }, [id]);

  useEffect(() => {
    if (showComments) {
      getComments(id)
        .then((body) => {
          const { comments } = body;
          setCommentsData(comments);
        })
        .catch((err) => console.log("couldn't fetch comments!", err));
    }
  }, [showComments, refreshComments, id]);

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleShowCommentForm = () => {
    if (!showComments) setShowComments(true);
    setShowCommentForm(true);
  };

  const handlePostComment = (newComment) => {
    postComment(id, newComment)
      .then(() => {
        setShowCommentForm(false);
        setRefreshComments((prev) => !prev);
      })
      .catch((err) => {
        console.error("Couldn't post comment:", err);
      });
  };

  const handleArticleVote = (article_id) => {
    if (hasVoted) return;

    setArticleVotes((prevVotes) => prevVotes + 1);
    setHasVoted(true);

    patchArticleVotes(article_id)
      .then((updatedArticle) => {
        setArticleVotes(updatedArticle.votes);
      })
      .catch((err) => {
        console.error("Vote failed:", err);
        setArticleVotes((prevVotes) => prevVotes - 1);
        setHasVoted(false);
      });
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <section className="articlePage">
        <h2>{articleData.title}</h2>
        <img src={articleData.article_img_url}></img>
        <p>{articleData.author}</p>
        <p>{articleData.body}</p>
        <p>{articleVotes ?? "Loading votes..."} votes</p>
        <button
          type="button"
          onClick={() => handleArticleVote(id)}
          disabled={hasVoted}
        >
          + vote
        </button>
        <p>{articleData.topic}</p>
        <p>{formatDateUTC(articleData.created_at)}</p>

        {articleData.comment_count > 0 ? (
          <button type="button" onClick={handleShowComments}>
            {showComments
              ? "hide comments"
              : `show ${articleData.comment_count} comments`}
          </button>
        ) : (
          <p>no comments yet - be the first to share your thoughts!</p>
        )}

        {!showCommentForm && (
          <button type="button" onClick={handleShowCommentForm}>
            + comment
          </button>
        )}

        {showCommentForm && <CommentForm onSubmit={handlePostComment} />}
        {showComments && (
          <div className="comments-wrapper">
            <CommentsSection commentsData={commentsData} />
          </div>
        )}
      </section>
    </div>
  );
}
export default ArticlePage;
