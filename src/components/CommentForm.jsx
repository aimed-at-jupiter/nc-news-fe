import { useState } from "react";

export function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState({ username: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.body.trim() === "" || comment.username.trim() === "") return;

    onSubmit(comment);
    setComment({ username: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment-author-field">Author:</label>
      <input
        type="text"
        id="commment-author-field"
        name="username"
        value={comment.username}
        onChange={(e) =>
          setComment((prev) => ({ ...prev, username: e.target.value }))
        }
        required
      />
      <label htmlFor="comment-body-field">Your Comment:</label>
      <textarea
        id="comment-body-field"
        name="body"
        value={comment.body}
        onChange={(e) =>
          setComment((prev) => ({ ...prev, body: e.target.value }))
        }
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}
