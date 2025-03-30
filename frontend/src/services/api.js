const API_KEY = "f425db7aa2134968e2dbad059b30a3a9";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => { 
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => { 
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
