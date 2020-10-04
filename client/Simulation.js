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
// Install scroll listener that stop animation while visualization is outside
// of viewport.
Simulation.renderOnlyInViewport();

// Create a skybox using NASA TYCHO artwork.
Simulation.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
// Create our first object - the sun - using a preset space object.
Simulation.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);
Spacekit.SpaceObjectPresets.EARTH.particleSize = 100;
Spacekit.SpaceObjectPresets.MARS.particleSize = 70;
export const earth = Simulation.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
export const mars = Simulation.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);
export const legrange1 = earthOrbiter(2451605.8333333335);
export const legrange2 = earthOrbiter(2451484.1666666665);


export default Simulation;
