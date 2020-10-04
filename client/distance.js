function distance(x1,y1,x2,y2) {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
};

function distanceFromOrigin(x1,y1,x2,y2) {
  const dy = y2 - y1;
  const dx = x2 - x1;
  const num = Math.abs(x2*y1 - y2*x1);
  const dist = num/distance(x1,x2,y1,y2);
  console.log(dist);
  return dist;
};

const SUN_DIAMETER = 1392700; //kilometers

function blockedSignal(x1,y1,x2,y2) {
  if(distanceFromOrigin(x1,y1,x2,y2) < (SUN_DIAMETER/2)) {
    return true;
  }
  return false;
}

function oneWayTimeOfTravel(distance) {
  return distance/299792.458;
};

module.exports.oneWayTimeOfTravel = oneWayTimeOfTravel;
module.exports.distanceFromOrigin = distanceFromOrigin;
module.exports.blockedSignal = blockedSignal;
module.exports.distance = distance;
