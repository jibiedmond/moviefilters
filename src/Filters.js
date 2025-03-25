import React, { useState, useContext } from "react";
import { FilterContext } from "./FilterContext";

const Filters = () => {
  const { setFilteredMovies, sampleMovies } = useContext(FilterContext);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const handleFilterChange = () => {
    if (!sampleMovies) return; // 🚀 Prevents the error

    const filtered = sampleMovies.filter(
      (movie) =>
        (selectedGenre ? movie.genre === selectedGenre : true) &&
        (selectedYear ? movie.year === parseInt(selectedYear) : true) &&
        (selectedRating ? movie.rating >= parseFloat(selectedRating) : true)
    );

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h3>Filter Movies</h3>

      <label>Genre:</label>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Comedy">Comedy</option>
      </select>

      <label>Year:</label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">All</option>
        <option value="2004">2004</option>
        <option value="2011">2011</option>
        <option value="2016">2016</option>
      </select>

      <label>Rating:</label>
      <input
        type="number"
        value={selectedRating}
        onChange={(e) => setSelectedRating(e.target.value)}
      />

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;
