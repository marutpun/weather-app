export function degreeToDirection(degree) {
  let direction = '';

  if ((degree >= 0 && degree <= 22.5) || (degree > 337.5 && degree <= 360)) {
    direction = 'North';
  } else if (degree > 22.5 && degree <= 67.5) {
    direction = 'North East';
  } else if (degree > 67.5 && degree <= 112.5) {
    direction = 'East';
  } else if (degree > 112.5 && degree <= 157.5) {
    direction = 'South East';
  } else if (degree > 157.5 && degree <= 202.5) {
    direction = 'South';
  } else if (degree > 202.5 && degree <= 247.5) {
    direction = 'South West';
  } else if (degree > 247.5 && degree <= 292.5) {
    direction = 'West';
  } else if (degree > 292.5 && degree <= 337.5) {
    direction = 'North West';
  } else {
    direction = 'N/A';
  }
  return direction;
}
