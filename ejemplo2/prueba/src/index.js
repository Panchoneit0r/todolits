import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function tick(){
  const element = (
    <div>
      <h1>Reloj</h1>
      <h2>Hora: {new Date().toLocaleTimeString()}</h2>
    </div>
  );


  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)
