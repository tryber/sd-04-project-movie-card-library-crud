import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReplyIcon } from '@primer/octicons-react';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="form-group">
        <label htmlFor="movie_title">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate form-control"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="form-group">
        <label htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="form-control"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="form-group">
        <label htmlFor="movie_image">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          className="form-control"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="form-group">
        <label htmlFor="movie_storyline">Sinopse</label>
        <textarea
          id="movie_storyline"
          className="form-control"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="col form-group">
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          className="form-control"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="col form-group">
        <label htmlFor="movie_rating">Avaliação</label>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          className="form-control"
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    const { formTitle, returnPagePath } = this.props;

    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light mt-4">
          <span className="navbar-brand font-weight-light">{formTitle}</span>
          <Link className="nav-link d-flex align-items-center" to={returnPagePath}>
            <ReplyIcon className="mr-1" size={14} />
            VOLTAR
          </Link>
        </nav>
        <form className="p-5">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          <div className="row">
            {this.renderGenreSelection()}
            {this.renderRatingInput()}
          </div>
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape(PropTypes.object.isRequired),
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  returnPagePath: PropTypes.string.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    bookmarked: false,
    genre: 'action',
  },
};

export default MovieForm;
