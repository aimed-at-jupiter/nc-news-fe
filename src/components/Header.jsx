import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/" className="home-link">
          NC News
        </Link>
      </h1>
    </header>
  );
}

export default Header;
