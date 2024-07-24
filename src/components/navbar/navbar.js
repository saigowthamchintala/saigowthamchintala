import "./navbar.css";
import { navitems } from "./navitems";
export default function NavBar() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        {navitems.map((item, index) => {
          return (
            <li>
              <a
                href={item.url}
                className={
                  index === navitems.length - 1
                    ? "main-nav-link nav-cta"
                    : "main-nav-link"
                }
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
