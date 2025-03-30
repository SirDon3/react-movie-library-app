import MovieCard from "../components /MovieCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";   


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (err) {
                console.log(err);
                setError("Error loading popular movies");
            }finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => { 
        e.preventDefault()
        if (!searchQuery.trim()) return;
        if(loading) return;
       
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
            console.log("here");
        }
        catch (err) {
            console.log(err);
            setError("Error loading search results");
            console.log("here");
   
        } finally {
            setLoading(false);
            console.log("here");
        }
        console.log("here");
    
};

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." 
                   className="search-input" value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

    {error && <div className="error-message">{error}</div>}    

    {loading ? (
        <div className="loading">Loading...</div>
    ) : (
        <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
     </div>
    )}
 
    </div>
  );
}

export default Home;