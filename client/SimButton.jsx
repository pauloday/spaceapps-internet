import React, {useState} from 'react';
import Simulation from './Simulation';

function start() {
  Simulation.start();
}

function stop() {
  Simulation.stop();
}

function marsOrbiter(epoch) {
  return {
    theme: {
      color: 0xFFBF00,
    },
    ephem: new Spacekit.Ephem({
      epoch,
      a: 1.52371401537107,
      e: 9.336741335309606e-2,
      i: 1.848141099825311,
      om: 4.950420572080223e1,
      w: 2.866965847685386e2,
      ma: 2.538237617924876e1,
    },
    'deg',
    true /* locked */),
  };
}

function lagrange(num, lagranges, setLagranges) {
  const getLagrange = (lnum) => {
    switch (lnum) {
      case 1:
        return Simulation.createObject('MarsLagrange1', marsOrbiter(2458541));
      case 2:
        return Simulation.createObject('MarsLagrange2', marsOrbiter(2458312));
      case 3:
        return Simulation.createObject('MarsLagrange3', marsOrbiter(2458770));
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

function SimButton({type, name, lagrangeNum = 1}) {
  const [lagranges, setLagranges] = useState([false, false, false]);
  let onclick;
  switch (type) {
    case 'start':
      onclick = start;
      break;
    case 'stop':
      onclick = stop;
      break;
    case 'lagrange':
      onclick = () => lagrange(lagrangeNum, lagranges, setLagranges);
      break;
    default:
      onclick = start;
      break;
  }
  return <button style={{color: "black", background: "dodgerblue", borderColor: "dodgerblue", borderRadius: "5px", border: "solid 1px"}} onClick={onclick}>{name}</button>
}

export default SimButton;
