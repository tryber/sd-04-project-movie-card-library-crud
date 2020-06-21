import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((arrMovie) =>
    this.setState({
      status: 'loaded',
      movie: arrMovie,
    }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() =>
    this.setState({
      shouldRedirect: true,
    }),
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { history } = this.props;
    if (shouldRedirect) {
      history.push('/');
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default EditMovie;