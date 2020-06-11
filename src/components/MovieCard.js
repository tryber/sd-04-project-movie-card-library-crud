import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    const { title, imagePath, storyline, id } = this.props.movie;
    this.state = {
      title: title,
      imagePath: imagePath,
      storyline: storyline,
      id: id,
    };
  }

  render() {
    return (
      <div data-testid="movie-card">
        <img src={this.state.imagePath} alt={this.state.title} />
        <h4>{this.state.title}</h4>
        <p>{this.state.storyline}</p>
        <Link to={`movies/${this.state.id}`}>VER DETALHES</Link>
        {/* {console.log(movie)} */}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
