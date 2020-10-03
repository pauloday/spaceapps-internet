import React, { useState } from 'react';
import Simulation from './Simulation';
import SimButton from './SimButton';

function makeOrbiter(epoch) {
  const o =  Simulation.createObject('spaceman', {
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
      epoch,
    }, 'deg'),
  });
  Simulation.removeObject(o);
  return o;
}

function OrbitParams() {
  const [epoch, setEpoch] = useState(0);
  const [orbiter, setOrbiter] = useState(makeOrbiter(0));
  const updateEpoch = (event) => {
    Simulation.removeObject(orbiter);
    setEpoch(event.target.value);
    setOrbiter(makeOrbiter(event.target.value));
  };
  return (
    <div>
      <input type="text" value={epoch} onChange={updateEpoch} />
      <SimButton type="Roadster" name="Roadster" />
    </div>
  );
}

export default OrbitParams;
