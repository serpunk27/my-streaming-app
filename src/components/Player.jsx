import React from 'react';

const Player = ({ url }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9" style={{ height: '600px', width: '100%' }}>
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

export default Player;
