import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
