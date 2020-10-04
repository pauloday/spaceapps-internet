import React, {useState} from 'react';
import Simulation from './Simulation';

function start() {
  Simulation.start();
}

function stop() {
  Simulation.stop();
}

function earthOrbiter(epoch) {
  return {
    textureUrl: '{{assets}}/sprites/fuzzyparticle.png',
    theme: {
      color: 0xf09acd,
    },
    particleSize: 30,
    ephem: new Spacekit.Ephem(
      {
        // Taken from https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
        // https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
        epoch,
        a: 1.00000261,
        e: 0.01671123,
        i: -0.00001531,
        om: 0.0,
        wBar: 102.93768193,
        L: 100.46457166,
      },
      'deg',
      true /* locked */,
    ),
  };
}

function lagrange(num, lagranges, setLagranges, connectivity, setConnectivity) {
  const getLagrange = (lnum) => {
    switch (lnum) {
      case 1:
        return Simulation.createObject('MarsLagrange1', earthOrbiter(2451605.8333333335));
      case 2:
        return Simulation.createObject('MarsLagrange2', earthOrbiter(2451484.1666666665));
      default:
    }
    return {};
  };
  if (lagranges[num]) {
    Simulation.removeObject(lagranges[num]);
    setConnectivity(connectivity - 50);
    lagranges[num] = false;
  } else {
    setConnectivity(connectivity + 50);
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
