
import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: {
      title: '',
      subtitle: '',
      imagePath: '',
      genre: '',
      id: '',
      rating: '',
      storyline: '',
      bookmarked: '',
    },
      loading: true,
    };
  }

  componentDidMount() {
    const searchId = this.props.match.params.id;
    movieAPI.getMovie(searchId).then((movie) => this.setState({ movie, loading: false }));
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
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
