import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newItem) {
    movieAPI.createMovie(newItem).then((status) => this.setState({ status }));
  }

  render() {
    const { status } = this.state;
    if (status === 'OK') return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
