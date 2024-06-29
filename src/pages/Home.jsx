import { useEffect, useState } from "react";
import { fetchMovies } from "../components/fetchApi";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMovies();

      setData(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {data &&
            data.map((obj) => (
              <li key={obj.id}>
                <NavLink
                  to={`/goit-react-hw-05-movies/movies/${obj.id}`}
                  state={{ from: location }}>
                  {obj.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
