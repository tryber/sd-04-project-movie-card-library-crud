import React from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { id, imagePath, storyline, title} = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt='a movie' />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Ver Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
