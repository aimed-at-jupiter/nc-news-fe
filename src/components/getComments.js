export function getComments(id) {
  let path = `https://nc-news-sho1.onrender.com/api/articles/${id}/comments`;

  return fetch(path).then((res) => {
    if (res.status !== 200) {
      return Promise.reject({
        status: res.status,
        msg: "couldn't fetch comments!",
      });
    }
    return res.json();
  });
}
