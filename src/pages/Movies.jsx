import { useEffect, useState } from "react";
import { fetchQuery } from "../components/fetchApi";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const [queryResults, setQueryResults] = useState();
  const [totalResults, setTotalResults] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";
  useEffect(() => {
    if (movieName === "") return;
    const fetch = async () => {
      return await fetchQuery(movieName).then((res) => {
        setQueryResults(res.data.results);
        setTotalResults(res.data.total_results);
      });
    };
    fetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const queryInput = form.elements.inputQuery;
    const inputText = queryInput.value;
    fetchQuery(inputText).then((res) => {
      setQueryResults(res.data.results);
      setTotalResults(res.data.total_results);
    });
  };

  const handleQueryParams = (e) => {
    const inputValue = e.target.value;
    setSearchParams(inputValue !== "" ? { query: inputValue } : {});
  };
  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={movieName}
            name="inputQuery"
            onChange={handleQueryParams}
            required></input>
          <button type="submit">Search</button>
        </form>
        <ul>
          {queryResults &&
            queryResults.map((obj) => (
              <li key={obj.id}>
                <Link
                  to={`/goit-react-hw-05-movies/movies/${obj.id}`}
                  state={{ from: location }}>
                  {obj.title}, {obj.release_date}
                </Link>
              </li>
            ))}
        </ul>
        <p>Total results: {totalResults}</p>
      </main>
    </>
  );
};

export default Movies;
