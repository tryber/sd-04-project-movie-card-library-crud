import React, { Component } from "react";
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

    if (shouldRedirect) {
      history.push("/");
    }

    if (isLoading) return <Loading />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
