import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useState } from "react";

function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const movies = [
        {id: 1, title: "The Shawshank Redemption", year: 1994,},
        {id: 2, title: "The Godfather", year: 1972,},
        {id: 3, title: "The Dark Knight", year: 2008,},
        {id: 4, title: "Minari", year: 2020,}
    ];

    const handleSearch = (e) => { 
        e.preventDeafult()
   
    }

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." 
                   className="search-input" value={searchQuery}
                   onChange={(e) => setsearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
     <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
     </div>
    </div>
  );
}

export default Home;