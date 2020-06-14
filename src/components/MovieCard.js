import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      subtitle,
      imagePath,
      bookmarked,
      genre,
      storyline,
      rating,
      id,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <img src={imagePath} />
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
