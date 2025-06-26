export function getArticles(id) {
  let path = "https://nc-news-sho1.onrender.com/api/articles";

  if (id) {
    path = `https://nc-news-sho1.onrender.com/api/articles/${id}`;
  }
  console.log(path);
  return fetch(path).then((res) => {
    if (res.status !== 200) {
      return Promise.reject({
        status: res.status,
        msg: "couldn't fetch articles!",
      });
    }
    return res.json();
  });
}
