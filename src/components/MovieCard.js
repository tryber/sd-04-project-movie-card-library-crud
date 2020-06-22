import React from 'react';

function MovieCard(props) {
  const {
    movie: { title, subtitle, storyline, rating, imagePath, id },
  } = props;
  return (
    <div data-testid="movie-card" className="movie-card">
      <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <p className="rating">{rating}</p>
        <a href={`/movies/${id}`}>VER DETALHES</a>
      </div>
    </div>
  );
}

export default MovieCard;
