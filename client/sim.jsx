import React from 'react';
import Spacekit from '../spacekit';

function Sim() {
  const viz = new Spacekit.Simulation(document.getElementById('sim'), {
    basePath: './',
    startDate: Date.now(),
  });
  console.log(viz);
  return (
    <div></div>
  )
}

export default Sim;
