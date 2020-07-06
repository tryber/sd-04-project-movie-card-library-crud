import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    //  const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <Link to={`/movies/${this.props.movie.title}`} >
          <div>
            <img src={this.props.movie.imagePath} alt="Capa do Filme" />
            <div>
              <h4>{this.props.movie.title}</h4>
              <h5>{this.props.movie.subtitle}</h5>
              <p>{this.props.movie.storyline}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
