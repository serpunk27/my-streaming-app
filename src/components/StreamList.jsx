import React from 'react';

function StreamList({ streams, onSelect, activeUrl }) {
  return (
    <ul className="list-group">
      {streams.map((stream) => (
        <li
          key={stream.url}
          className={`list-group-item ${
            stream.url === activeUrl ? 'active' : ''
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => onSelect(stream.url)}
        >
          {stream.name}
        </li>
      ))}
    </ul>
  );
}

export default StreamList;
