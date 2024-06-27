import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchDetails } from "./fetchApi";

import Style from "./css/MoviesDetails.module.css";

const MoviesDetails = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await fetchDetails(id).then((res) => setMovieData(res.data));
    };
    fetch();
  }, []);

  return (
    <>
      {movieData && (
        <main>
          <button>← Go Back</button>
          <div className={Style.card}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movieData?.poster_path}`}
              />
            </div>
            <div>
              <h2>{movieData?.title}</h2>
              <p>User Score: {movieData?.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movieData?.overview}</p>
              <h3>Genres:</h3>
              <p>{movieData?.genres.map((obj) => obj.name).join(", ")}</p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/goit-react-hw-05-movies/movies/${id}/cast`}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`/goit-react-hw-05-movies/movies/${id}/reviews`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <hr></hr>
          <Outlet></Outlet>
        </main>
      )}
    </>
  );
};

export default MoviesDetails;
