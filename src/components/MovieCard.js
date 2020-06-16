import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
