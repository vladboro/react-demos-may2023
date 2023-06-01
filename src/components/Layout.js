import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    <hr/>
    <Outlet/>
    </div>
  );
};

export default Layout