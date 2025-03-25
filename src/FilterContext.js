import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const sampleMovies = [
  { id: 1, title: "Gilli", year: 2004, genre: "Action", rating: 9 },
  { id: 2, title: "Engeyum Kadhal", year: 2011, genre: "Romance", rating: 8 },
  { id: 3, title: "Remo", year: 2016, genre: "Comedy", rating: 7 },
];

export const FilterProvider = ({ children }) => {
  const [filteredMovies, setFilteredMovies] = useState(sampleMovies);

  return (
    <FilterContext.Provider
      value={{ filteredMovies, setFilteredMovies, sampleMovies }}
    >
      {children}
    </FilterContext.Provider>
  );
};
