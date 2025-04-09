import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import MobileMenu from "../ui/MobileMenu/MobileMenu";


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo__img" />
          </Link>
          <nav className="menu">
            <button className="menu__btn">
              <span className="menu__btn--span"></span>
              <span className="menu__btn--span"></span>
              <span className="menu__btn--span"></span>
              <div className="menu__btn--close displayNone">close</div>
            </button>
            <ul className="menu__list">
              <li className="menu__list-item">
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__list-link menu__list-link--active"
                      : "menu__list-link"
                  }
                >
                  NEW CARS
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  to="/preownedcars"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__list-link menu__list-link--active"
                      : "menu__list-link"
                  }
                >
                  PRE-OWNED CARS
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  to="/finance"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__list-link menu__list-link--active"
                      : "menu__list-link"
                  }
                >
                  FINANCE
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  to="/leasevsbuy"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__list-link menu__list-link--active"
                      : "menu__list-link"
                  }
                >
                  LEASE VS BUY
                </NavLink>
              </li>
              <li className="menu__list-item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__list-link menu__list-link--active"
                      : "menu__list-link"
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
            <MobileMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
