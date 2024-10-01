import { Link, NavLink } from "react-router-dom";
import Logo from "../../src/assets/logo.png";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center mb-2">
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

        {/* logo */}
        <div className="nav__logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

        <div className="nav__icons relative">
          {/* search icon */}
          <span>
            <Link to="/search">
              <GrSearch className="text-2xl" />
            </Link>
          </span>

          {/* cart icon */}
          <span>
            <button className="hover:text-primary relative">
              <sup className="absolute -top-2 -right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                0
              </sup>
              <RiShoppingBag4Line className="text-2xl" />
            </button>
          </span>

          {/* user icon */}
          <span>
            <Link to="/login">
              <FaRegUser className="rounded-full cursor-pointer" />
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
