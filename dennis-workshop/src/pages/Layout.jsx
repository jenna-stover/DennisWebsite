import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import "./Layout.css";
import "../index.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div id="content">
      <div className="header-container">
        <Header />
        <nav id="main-nav">
          <div id="toggle" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
            <li>
              <Link to="/Projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/Services">SERVICES</Link>
            </li>
            <li>
              <Link to="/Book">BOOK CONSULT</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;