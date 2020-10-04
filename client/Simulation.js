/* eslint-disable no-undef */

const Simulation = new Spacekit.Simulation(document.getElementById('sim'), {
  basePath: './',
  startDate: Date.now(),
  jdPerSecond: 25,
  camera: {
    initialPosition: [
      -2.0014980565625981512,
      2.030445338891231168,
      0.73616394298897485,
    ],
  },
});
// Install scroll listener that stop animation while visualization is outside
// of viewport.
Simulation.renderOnlyInViewport();

// Create a skybox using NASA TYCHO artwork.
Simulation.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
const MARSE1 = {
  theme: {
    color: 0xFFBF00,
  },
  ephem: new Spacekit.Ephem({
    epoch: 1458426.5,
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
// Create our first object - the sun - using a preset space object.
Simulation.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);
Spacekit.SpaceObjectPresets.EARTH.particleSize = 100;
Spacekit.SpaceObjectPresets.MARS.particleSize = 70;
Simulation.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
Simulation.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);
Simulation.createObject('MarsLagrange', MARSE1);
export default Simulation;
