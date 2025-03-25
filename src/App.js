import React from "react";
import Filters from "./Filters";
import MoviesList from "./MoviesList";
import { FilterProvider } from "./FilterContext"; // ✅ Correct import

const App = () => {
  return (
    <FilterProvider>
      <div>
        <h1>Movie Filter App</h1>
        <Filters />
        <MoviesList />
      </div>
    </FilterProvider>
  );
};

export default App;
