import React, { Component } from 'react';


import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '', shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeRedirect(status) {
    if (status === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  handleSubmit(updatedMovie) {
    movieAPI
    .createMovie(updatedMovie)
    .then((resp) => this.changeRedirect(resp));
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect Push to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
