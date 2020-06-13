import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {}

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit}>
          <label for="title">Título</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <label for="subtitle">Subtítulo</label>
          <input
            type="text"
            id="subtitle"
            value={this.state.subtitle}
            onChange={(e) => this.setState({ subtitle: e.target.value })}
          />
          <label for="image">Imagem</label>
          <input
            type="text"
            id="image"
            value={this.state.image}
            onChange={(e) => this.setState({ image: e.target.value })}
          />
          <label for="storyline">Sinopse</label>
          <textarea
            type="text"
            id="storyline"
            value={this.state.storyline}
            onChange={(e) => this.setState({ storyline: e.target.value })}
          />
          <label for="genre">Gênero</label>
          <select id="genre" onChange={(e) => this.setState({ genre: e.target.value })} >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>

          <label for="rating">Avaliação</label>
            <input type="number" min="0" max="5" step="0.1"></input>
        </MovieForm>
      </div>
    );
  }
}

export default EditMovie;
