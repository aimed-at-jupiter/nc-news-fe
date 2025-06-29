export function postComment(article_id, commentData) {
  return fetch(
    `https://nc-news-sho1.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }
  ).then((res) => {
    if (!res.ok) {
      console.log("Failed to post comment");
    }
    return res.json();
  });
}
