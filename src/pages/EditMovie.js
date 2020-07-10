import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    const {
      // status,
      // shouldRedirect,
       movie } = this.state;
    const { id } = movie;
    // if (shouldRedirect) {
      // Redirect
    // }

    // if (status === 'loading') {
      // render Loading
    //   <Loading />
    // }
    return id ? (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    ) : (<Loading />);
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default EditMovie;
