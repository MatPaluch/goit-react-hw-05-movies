import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/goit-react-hw-05-movies/" end>
            Home
          </NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies">Movie</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading... </div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};
export default SharedLayout;
