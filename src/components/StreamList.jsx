import React from 'react';
import PropTypes from 'prop-types';



function StreamList({ streams, onSelect, activeUrl }) {
  return (
    <div className="list-group">
      {streams.map((stream, index) => (
        <button
          key={index}
          className={`list-group-item list-group-item-action ${stream.url === activeUrl ? 'active' : ''}`}
          onClick={() => onSelect(stream.url)}
        >
          {stream.name}
        </button>
      ))}
    </div>
  );
}

// Validación de las props
StreamList.propTypes = {
  streams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  activeUrl: PropTypes.string.isRequired,
};

export default StreamList;
