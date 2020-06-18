import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {movie} =this.props;
    const {title, subtitle, storyline, imagePath} = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
