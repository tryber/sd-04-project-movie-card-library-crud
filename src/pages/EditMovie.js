import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      shouldRedirect: false,
      status: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) =>
      this.setState({
        movie,
        status: false,
      }),
    );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() =>
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  render() {
    const { history } = this.props;
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      history.push('/');
    }

    if (status === true) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  history: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))
    .isRequired,
  match: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.func, PropTypes.object]))
    .isRequired,
};
