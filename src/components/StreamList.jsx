import React from 'react';
import PropTypes from 'prop-types';

const StreamList = ({ streams, onSelect, activeUrl }) => {
  return (
    <div className="list-group">
      {streams.map((stream, index) => (
        <button
          key={index}
          className={`list-group-item ${stream.url === activeUrl ? 'active' : ''}`}
          onClick={() => onSelect(stream.url)}
        >
          {stream.name}
        </button>
      ))}
    </div>
  );
};

StreamList.propTypes = {
  streams: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  activeUrl: PropTypes.string.isRequired,
};

export default StreamList;
