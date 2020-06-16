import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import MovieForm from "../components/MovieForm";
import * as movieAPI from "../services/movieAPI";

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      isLoading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { isLoading, shouldRedirect } = this.state;
    const { history } = this.props;
    console.log("Props:", this.props);

    if (isLoading) return <Loading />;

    if (shouldRedirect) {
      history.push("/");
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewMovie;
