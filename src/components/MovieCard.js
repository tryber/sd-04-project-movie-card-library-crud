import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {movie} =this.props;
    const {title, subtitle, storyline, imagePath} = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-img" src-{imagePath} alt="movie Card" />
        <div className="movie-screen">
        <h4 className="movie-title">{title}</h4>
        <h5 className="movie-subtitle">{subtitle}</h5>
        <p className="movie-storyline">{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
