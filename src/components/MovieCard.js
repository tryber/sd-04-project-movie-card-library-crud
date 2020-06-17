import React from 'react';
// import MovieDetails from '../pages/MovieDetails';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, genre} = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="movie">
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{storyline}</div>
        <Link to="/movies/:id">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
