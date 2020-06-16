import React, { Component } from 'react';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {movie: [], shouldRedirect: false, loadead: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getThisMovie();
  }

  async getThisMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loadead: true, id });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    await this.setState({ shouldRedirect: true });
  }

  render() {
    const { loadead, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />
    if (!loadead) return <Loading />
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
