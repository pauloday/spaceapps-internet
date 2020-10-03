import React from 'react';
import Simulation from './Simulation';

function start() {
  Simulation.start();
}
function stop() {
  Simulation.stop()
}
function roadster() {
  const roadster = Simulation.createObject('spaceman', {
    labelText: 'Tesla Roadster',
    ephem: new Spacekit.Ephem({
      // These parameters define orbit shape.
      a: 1.324870564730606E+00,
      e: 2.557785995665682E-01,
      i: 1.077550722804860E+00,

      // These parameters define the orientation of the orbit.
      om: 3.170946964325638E+02,
      w: 1.774865822248395E+02,
      ma: 1.764302192487955E+02,

      // Where the object is in its orbit.
      epoch: 2458426.500000000,
    }, 'deg'),
  });
}
function SimButton({type, name}) {
  let onclick;
  switch (type) {
    case 'start':
      onclick = start;
      break;
    case 'stop':
      onclick = stop;
      break;
    case 'Roadster':
      onclick = roadster;
      break;
    default:
      onclick = start;
      break;
  }
  return <button onClick={onclick}>{name}</button>;
}

export default SimButton;
