import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="row align-items-center justify-centent-center h-100">
        <div className="col">
          <p className="text-center">Carregando...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
