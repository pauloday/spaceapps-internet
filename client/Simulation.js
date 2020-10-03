/* eslint-disable no-undef */

const Simulation = new Spacekit.Simulation(document.getElementById('sim'), {
  basePath: './',
  startDate: Date.now(),
});
// Install scroll listener that stop animation while visualization is outside
// of viewport.
Simulation.renderOnlyInViewport();

// Create a skybox using NASA TYCHO artwork.
Simulation.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
Simulation.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);
Simulation.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
Simulation.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);

export default Simulation;
