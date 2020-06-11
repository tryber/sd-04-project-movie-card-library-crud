import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components'; TO REMOVEEEE

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />; TO REMOVEEEE

    // const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {/* <img alt="Movie Cover" src={`../${imagePath}`} /> TO REMOVEEEE
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p> */}
      </div>
    );
  }
}

export default MovieDetails;
