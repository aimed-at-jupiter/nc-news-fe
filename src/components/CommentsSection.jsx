import { CommentCard } from "./CommentCard";

function CommentsSection({ commentsData }) {
  return (
    <section>
      <ul>
        {commentsData.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </section>
  );
}

export default CommentsSection;
