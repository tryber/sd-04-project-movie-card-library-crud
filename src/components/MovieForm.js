import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="form-field">
        <label htmlFor="movie_title">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate form-input"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="form-field">
        <label htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="form-input"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row form-field">
        <label htmlFor="movie_image">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          className="form-input"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="form-field">
        <label htmlFor="movie_storyline">Sinopse</label>
        <textarea
          id="movie_storyline"
          value={storyline ? storyline: 'Insira a sinopse'}
          className="form-txtArea"
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="form-field">
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          value={genre}
          className="form-select"
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
      <div className="form-field">
        <label htmlFor="movie_rating">Avaliação</label>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          className="form-input"
          step={0.1}
          min={0}
          max={5}
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
          className="buttons bt-action"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form-pos">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    id: 0,
    title: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    genre: '',
  },
};

export default MovieForm;
