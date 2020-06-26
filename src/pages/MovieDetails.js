import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: null, loading: true };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => {
      this.setState({ movie: [movie], loading: false });
      console.log('montei');
    });
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    console.log(movie);
    const { title, storyline, imagePath, genre, rating, subtitle } = movie[0];
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
