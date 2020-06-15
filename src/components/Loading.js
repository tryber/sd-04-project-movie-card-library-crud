import React, { Component } from 'react';

class Loading extends Component {
  render() {
    function carregando() {
      return <p>Carregando...</p>;
    }
    return <div>{carregando()}</div>;
  }
}

export default Loading;
