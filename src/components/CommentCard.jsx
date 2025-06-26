import { formatDateUTC } from "../utils/formatDate";

export function CommentCard({ comment }) {
  return (
    <li>
      <p>
        <strong>{comment.author}</strong>: {comment.body}
      </p>
      <p>
        <em>{formatDateUTC(comment.created_at)}</em> | {comment.votes} votes
      </p>
    </li>
  );
}
