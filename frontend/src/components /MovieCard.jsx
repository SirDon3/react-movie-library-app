function MovieCard ({ movie }) {

  const onFavoriteClick = () => {
    console.log(`${movie.title} was favorited`);
  }
    
  return (
    <div className="movie-card">
      <div className="movie-poster">
      <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
              ♥
          </button>
        </div>
      </div>
      <div className="move-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}   

export default MovieCard;