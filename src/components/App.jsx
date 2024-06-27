import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import SharedLayout from "./SharedLayout";
import MoviesDetails from "./MoviesDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import "./css/App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
