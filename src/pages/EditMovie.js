import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import PropTypes from 'prop-types';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false, // quero que seja true qnd apertar submit
      // nao quero redirecionar até atualizar os estados
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((arrMovie) =>
    // arrMovie aqui é só a posiçao
    // qndo tenho a informaçao eu desativo o load
    // e passo a informaçao para renderizar na tela.
    this.setState({
      status: 'loaded',
      movie: arrMovie,
    }));
  }

  handleSubmit(updatedMovie) { // novo estado como param.
    movieAPI.updateMovie(updatedMovie).then(() =>
    this.setState({
      shouldRedirect: true,
    }),
    );
  }

  render() {
    // console.log(this.props);
    const { status, shouldRedirect, movie } = this.state;
    const { history } = this.props;
    if (shouldRedirect) {
      history.push('/');
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        {/* props.movie = this.state.movie (olhar form)*/}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default EditMovie;
