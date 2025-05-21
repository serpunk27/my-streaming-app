import React, { useState } from 'react';
import Player from './components/Player';
import StreamList from './components/StreamList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  const streams = [
    { name: 'Stream 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { name: 'Stream 2', url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
    { name: 'Stream 3', url: 'https://www.youtube.com/embed/lTTajzrSkCw' },
    { name: 'Stream 4', url: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
  ];

  const [currentStream, setCurrentStream] = useState(streams[0].url);

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Mi Streaming</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="main-container">
        <div className="row h-100">
          {/* Reproductor principal */}
          <div className="col-12 col-lg-8 mb-4 h-100">
            <Player url={currentStream} />
          </div>
          {/* Lista de streams */}
          <div className="col-12 col-lg-4 h-100">
            <StreamList streams={streams} onSelect={setCurrentStream} activeUrl={currentStream} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2025 Mi Streaming
      </footer>
    </>
  );
}

export default App;
