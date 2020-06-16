import React, { Component } from "react";
import PropTypes from "prop-types";
import { MovieForm, Loading } from "../components";
import * as movieAPI from "../services/movieAPI";

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then(movie => this.setState({ isLoading: false, movie }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    const { history } = this.props;

    if (shouldRedirect) {
      history.push("/");
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  history: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ).isRequired,
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
};

export default EditMovie;
