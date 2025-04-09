import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button className="menu__btn" onClick={() => setIsOpen(!isOpen)}>
        <span className={`menu__btn--span ${isOpen ? "displayNone" : ""}`} />
        <span className={`menu__btn--close ${isOpen ? "" : "displayNone"}`}>
          X
        </span>
      </button>

      <nav className={`menu__list ${isOpen ? "menu__list--active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
