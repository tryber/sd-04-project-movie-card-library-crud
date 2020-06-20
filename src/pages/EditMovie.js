import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: 'loading',
      shouldRedirect: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    await movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => {
        this.setState({ movie, status: 'true' });
      });
  }
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    const id = this.props.match.params.id;
    this.setState({ shouldRedirect: `/movies/${id}` });
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to={shouldRedirect} />;
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

EditMovie.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};


export default EditMovie;
