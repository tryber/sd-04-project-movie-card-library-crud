import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import { Loading } from '../components/Loading';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      isLoaded:false,
      shouldRedirect: false,
      movie: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
    .then((movie) => this.setState({ movie, isloaded: true}));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updateMovie)
      .then(() => this.setState({ shouldRedirect: true}));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    if (!isLoaded) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
