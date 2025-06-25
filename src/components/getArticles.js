export function getArticles() {
  let path = "https://nc-news-sho1.onrender.com/api/articles";

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
