import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ url }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9" style={{ height: '450px' }}>
      <iframe
        className="embed-responsive-item"
        src={url}
        allowFullScreen
        title="Reproductor principal"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

// Validación de las props
Player.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Player;
