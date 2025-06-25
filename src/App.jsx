import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import ArticlesList from "./components/ArticlesList.jsx";

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
      </Routes>
    </div>
  );
}

export default App;
