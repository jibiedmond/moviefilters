import React, { useContext } from "react";
import { FilterContext } from "./FilterContext";

const MoviesList = () => {
  const { filteredMovies } = useContext(FilterContext);

  return (
    <div>
      <h2>Movies List</h2>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MoviesList;
