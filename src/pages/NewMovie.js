import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';
import './Pages.css';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    await this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <div className="movieListStyle">
          <div className="movieCardStyle">
            <MovieForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewMovie;
