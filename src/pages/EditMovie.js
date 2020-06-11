import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then(res =>
        this.setState(state => ({ ...state, status: 'ok', movie: res })),
      );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(res => res === 'OK' ? this.setState(state => ({...state, shouldRedirect:true})) : console.log('a'));
  }

  render() {  
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid='edit-movie'>
        {status === 'ok' && <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

export default EditMovie;
