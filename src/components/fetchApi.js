import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTdhMTMyMWM2MDI2NzAyZjBlOGE2MDgyNTAwZjFmZSIsIm5iZiI6MTcxOTMxNjc4Ni4wNzUyNzUsInN1YiI6IjY2NDY0YzQ0YWQwOGEzMDUwNzNkNzFiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HL7T6jfMJQ634tez3ts50MfPUY442K-UcXRYkWO_YAo",
  },
};

export const fetchMovies = async () => {
  return await axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
    .catch((err) => console.error(err));
};

export const fetchDetails = async (movie_id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    options,
  );
};

export const fetchCredits = async (movie_id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    options,
  );
};

export const fetchReviews = async (movie_id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    options,
  );
};

export const fetchQuery = async (inputQuery) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${inputQuery}&include_adult=false&language=en-US&page=1`,
    options,
  );
};
