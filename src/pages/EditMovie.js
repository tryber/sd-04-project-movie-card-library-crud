import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, success: false, redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({ movie, success: true });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(this.setState({ redirect: true }));
  }

  render() {
    const { success, redirect, movie } = this.state;
    if (redirect) return <Redirect to="/" />;
    if (!success) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <div className="movieListStyle">
          <div className="movieCardStyle">
            <MovieForm movie={movie} onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};

EditMovie.defaultProps = {
  match: { params: { id: 100 } },
};

export default EditMovie;
