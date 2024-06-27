import { useEffect, useState } from "react";
import { fetchMovies } from "../components/fetchApi";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMovies();
      console.log(response.data.results);
      setData(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {data
            ? data.map((obj) => (
                <li key={obj.id}>
                  <NavLink to={`/goit-react-hw-05-movies/movies/${obj.id}`}>
                    {obj.title}
                  </NavLink>
                </li>
              ))
            : false}
        </ul>
      </main>
    </>
  );
};

export default Home;
