import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import movies from "../data/movies"; // sample movies array

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      {movie.genres.map((genre, idx) => (
        <span key={idx}>{genre} </span>
      ))}
    </div>
  );
};
export default Movie;