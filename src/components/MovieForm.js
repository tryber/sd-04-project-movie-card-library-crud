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
      <div>
        <label className="input-label" htmlFor="movie_title">Título</label><br />
        <input
        className="input-title"
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
        
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
         <label className="input-label" htmlFor="movie_subtitle">Subtítulo</label><br />
        <input
        className="input-subtitle"
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
       
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label className="input-label" htmlFor="movie_image">Imagem</label><br />
        <input
        className="input-imagePath"
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
        
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label className="input-label" htmlFor="movie_storyline">Sinopse</label><br />
        <textarea
        className="input-storyline"
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
        
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div>
        <label className="input-label" htmlFor="movie_genre">Gênero</label><br />
        <select
        className="input-select"
          id="movie_genre"
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
      <div>
        <label className="input-label" htmlFor="movie_rating">Avaliação</label><br />
        <input
        className="input-rating"
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
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
        className="input-submit"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form-div">
        <h1>Adicione um novo Filme</h1>
        <form className="new-movie-form">
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

export default MovieForm;
