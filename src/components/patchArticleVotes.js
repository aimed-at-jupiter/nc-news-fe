export function patchArticleVotes(article_id) {
  const body = JSON.stringify({
    inc_votes: 1,
  });
  return fetch(`https://nc-news-sho1.onrender.com/api/articles/${article_id}`, {
    method: "PATCH",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "couldn't upvote",
        });
      }
      return res.json();
    })
    .then(({ article }) => {
      return article;
    });
}
