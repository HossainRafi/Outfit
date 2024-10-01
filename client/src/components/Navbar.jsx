import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center bg-blue-500">

        {/* nav links items */}
        <ul className="nav__links">
          <li className="link">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/pages"
            >
              Pages
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
