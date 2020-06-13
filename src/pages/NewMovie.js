import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import { createMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // status: 'loading',
      shouldRedirect: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ status: null });
    }, 1000);
  }

  handleSubmit(newMovie) {
    createMovie(newMovie)
      .then((ok) => this.setState({ shouldRedirect: ok }));
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    // if (status === 'loading') return <Loading />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
