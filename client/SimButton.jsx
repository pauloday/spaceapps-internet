import React, {useState} from 'react';
import Simulation, {legrange1, legrange2} from './Simulation';

function start() {
  Simulation.start();
}

function stop() {
  Simulation.stop();
}



function lagrange(num, lagranges, setLagranges, connectivity, setConnectivity) {
  const getLagrange = (lnum) => {
    switch (lnum) {
      case 1:
        return Simulation.createObject('MarsLagrange1', legrange1);
      case 2:
        return Simulation.createObject('MarsLagrange2', legrange2);
      default:
    }
    return {};
  };
  if (lagranges[num]) {
    Simulation.removeObject(lagranges[num]);
    lagranges[num] = false;
  } else {
    lagranges[num] = getLagrange(num);
    setLagranges(lagranges);
  }
}

function SimButton({type, name, lagrangeNum = 1, connectivity, setConnection, lagranges, setLagranges}) {
  let onclick;
  switch (type) {
    case 'start':
      onclick = start;
      break;
    case 'stop':
      onclick = stop;
      break;
    case 'lagrange':
      onclick = () => lagrange(lagrangeNum, lagranges, setLagranges, connectivity, setConnection);
      break;
    default:
      onclick = start;
      break;
  }
  return <button style={{color: "black", background: "dodgerblue", borderColor: "dodgerblue", borderRadius: "5px", border: "solid 1px"}} onClick={onclick}>{name}</button>
}

export default SimButton;
