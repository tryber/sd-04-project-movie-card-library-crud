import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI
      .createMovie(newMovie)
      .then((res) => {
        if (res === 'OK') {
          this.setState((state) => ({ ...state, shouldRedirect: true }));
        } else {
          console.log('ERRO');
        }
      });
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie" className="row justify-content-center align-items-center h-100">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
