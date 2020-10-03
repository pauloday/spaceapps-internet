import Spacekit from '../spacekit';

function Sim() {
  const viz = new Spacekit.Simulation(document.getElementById('sim'), {
    basePath: './',
    startDate: Date.now(),
  });
  console.log(viz);
}

export default Sim;
