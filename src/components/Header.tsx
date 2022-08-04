import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";

function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--random-colour"]: `var(--${randomColor})`
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to='/products'> Home </Link>

          </li>
          <li>
            <Link to='/categories'> Categories </Link>

          </li>
          <li>
            {/* Create here a link to this page */}
            Basket
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
