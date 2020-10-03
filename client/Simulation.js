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

// Create our first object - the sun - using a preset space object.
Simulation.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);
Spacekit.SpaceObjectPresets.EARTH.particleSize = 100;
Spacekit.SpaceObjectPresets.MARS.particleSize = 70;
Simulation.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
Simulation.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);

export default Simulation;
