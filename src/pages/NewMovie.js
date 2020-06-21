import React, { Component } from 'react';
import MovieForm from '../components/MovieForm';
import MovieForm from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = ({ redirect: false});
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState = ({ redirect:true });
  }

  render() {
    if (this.state.shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
