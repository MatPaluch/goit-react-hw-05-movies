import { Outlet, NavLink } from "react-router-dom";
import "./css/SharedLayout.css";
const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movie</NavLink>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
};
export default SharedLayout;
