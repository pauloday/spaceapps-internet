import React from 'react';
import Simulation from './Simulation';

function start() {
  Simulation.start();
}

function SimButton({type, name}) {
  let onclick;
  switch (type) {
    case 'stop':
      onclick = start;
      break;
    default:
      onclick = start;
      break;
  }
  return <button onClick={onclick}>{name}</button>;
}

export default SimButton;
