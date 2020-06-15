import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    const linkDetail = `/movies/${id}`;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} title={title} />
        <h1>{title}</h1>
        <p>{storyline}</p>
          <Link to={linkDetail} >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
