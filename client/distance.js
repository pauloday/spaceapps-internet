function distance(x1,y1,x2,y2) {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
};

function distanceFromOrigin(x1,y1,x2,y2) {
  const slope = (y2-y1)/(x2-x1);
  let left = -1*slope*y1;
  let right = -1*x1;
  let b = slope;
  let a = 1;
  let c = -1*(left - right);
  let p = Math.abs(c);
  p = p/Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
  return p;
};

const SUN_DIAMETER = 1392700; //kilometers

function blockedSignal(x1,y1,x2,y2) {
  if(distanceFromOrigin(x1,y1,x2,y2) < SUN_DIAMETER/2) {
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
