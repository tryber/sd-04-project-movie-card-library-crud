import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  // const { movie } = props;
  const { id, imagePath, storyline, title } = this.props.movie;
  return (
    <div data-testid="movie-card">
      <img src={imagePath} alt="movie" />
      <p>{title}</p>
      <p>{storyline}</p>
      <Link to={`/movies/${id}`}>VER DETALHES</Link>
    </div>
  );
};

export default MovieCard;
