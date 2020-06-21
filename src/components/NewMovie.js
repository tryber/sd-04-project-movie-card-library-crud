import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => {
      this.setState({ redirect: true });
    });
    this.props.history.push('/');
  }

  render() {
    const { redirect, history } = this.props;
    console.log(this.props);
    if (redirect) return history.push('/');
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
// export default withRouter(NewMovie)

NewMovie.defaultProps = {
  redirect: false,
  history: {
    push: '/',
  },
};

NewMovie.propTypes = {
  redirect: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};
