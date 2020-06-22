import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { MovieForm, Loading } from '../components';
import PropTypes from 'prop-types';
import moduleName from '../components/Loading';
import moduleName from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: [], isLoaded: false, shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({ shouldRedirect: true }));
  }

  componentDidMount(){
    movieAPI.getMovie(this.props.match.params.id).then((movie) =>{
      const isLoaded = true;
      this.setState({ movie, isLoaded });
    })
  }

  render() {
    const { isLoaded, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return<Redirect to="/" />
    }

    if (isLoaded) {
      // render Loading
      return (
        <div data-testid="edit-movie">
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        </div>
      );
    }
    return<Loading />
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
