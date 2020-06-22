import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id,
      title,
      storyline,
      imagePath,
    }
  }
  render() {
    const { id, title, storyline, imagePath } = this.state; 
    return (
      <div data-testid="movie-card" className="movie-card">
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
