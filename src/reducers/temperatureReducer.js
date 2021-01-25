const TEMP_MIN = 'TEMP_MIN';
const TEMP_MAX = 'TEMP_MAX';
const WIND_DIR = 'WIND_DIR';
const WIND_SPEED = 'WIND_SPEED';
const SUNRISE = 'SUNRISE';
const SUNSET = 'SUNSET';

export const initialState = {
  tempMin: 0,
  tempMax: 0,
  windDir: 0,
  windSpeed: 0,
  sunrise: 0,
  sunset: 0,
};

export default function temperatureReducer(state, action) {
  switch (action.type) {
    case TEMP_MIN:
      return { ...state, tempMin: action.payload };
    case TEMP_MAX:
      return { ...state, tempMax: action.payload };
    case WIND_DIR:
      return { ...state, windDir: action.payload };
    case WIND_SPEED:
      return { ...state, windSpeed: action.payload };
    case SUNRISE:
      return { ...state, sunrise: action.payload };
    case SUNSET:
      return { ...state, sunset: action.payload };
  }
}

export function setTempMin(temp) {
  return {
    type: TEMP_MIN,
    payload: temp,
  };
}

export function setTempMax(temp) {
  return {
    type: TEMP_MAX,
    payload: temp,
  };
}

export function setWindDir(dir) {
  return {
    type: WIND_DIR,
    payload: dir,
  };
}

export function setWindSpeed(speed) {
  return {
    type: WIND_SPEED,
    payload: speed,
  };
}
export function setSunrise(time) {
  return {
    type: SUNRISE,
    payload: time,
  };
}

export function setSunset(time) {
  return {
    type: SUNSET,
    payload: time,
  };
}
