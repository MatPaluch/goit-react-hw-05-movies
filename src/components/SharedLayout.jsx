import { Outlet, NavLink } from "react-router-dom";
import "./css/SharedLayout.css";
const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/goit-react-hw-05-movies/movies" end>
            Home
          </NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies">Movie</NavLink>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
};
export default SharedLayout;
