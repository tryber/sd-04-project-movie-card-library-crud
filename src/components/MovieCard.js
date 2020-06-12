import React from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { title, id, subtitle, storyline, rating, imagePath: image, bookmarked, genre } = this.props.movie
    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image" src={image} />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <div className="movie-card-details">
          <Link to={`/movies/?${id}`}><p>VER DETALHES</p></Link>
        </div>
      </div>
    )
  }
}

export default MovieCard;
