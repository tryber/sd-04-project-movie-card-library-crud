import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <Link to={`/movies/${title}`} >
          <div>
            <img src={imagePath} alt="Capa do Filme" />
            <div>
              <h4>{title}</h4>
              <h5>{subtitle}</h5>
              <p>{storyline}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
