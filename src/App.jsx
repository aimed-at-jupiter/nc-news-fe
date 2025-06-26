import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import ArticlesList from "./components/ArticlesList.jsx";
import ArticlePage from "./components/ArticlePage.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ArticlesList />
            </>
          }
        />
        <Route
          path="/articles/:id"
          element={
            <>
              <ArticlePage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
