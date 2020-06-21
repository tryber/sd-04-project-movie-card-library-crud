import React, { Component } from 'react';

class Loading extends Component {
  render() {
    function carregar() {
      return <div>Carregando...</div>;
    }
    return <div>{carregando()}</div>;
  }
}

export default Loading;
