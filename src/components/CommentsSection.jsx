import { getComments } from "./getComments";
import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";

function CommentsSection({ article_id }) {
  const [loading, setLoading] = useState(false);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log("effect firing from commentsSection");

    getComments(article_id)
      .then((body) => {
        const { comments } = body;
        setCommentsData(comments);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<< error from getComments");
      });
  }, [article_id]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <ul>
        {commentsData.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
}

export default CommentsSection;
