import { getComments } from "./getComments";
import { useEffect, useState } from "react";
import { formatDateUTC } from "../utils/formatDate";

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
          return (
            <li key={comment.comment_id}>
              <p>
                <strong>{comment.author}</strong>: {comment.body}
              </p>
              <p>
                <em>{formatDateUTC(comment.created_at)}</em> | {comment.votes}{" "}
                votes
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CommentsSection;
