import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';

import temperatureReducer, {
  initialState,
  setTempMin,
  setTempMax,
  setWindDir,
  setWindSpeed,
  setSunrise,
  setSunset,
} from '../reducers/temperatureReducer';

export default function useWeather(initialVal) {
  const [state, dispatch] = useReducer(temperatureReducer, initialState);
  const [isLoading, setIsLoading] = useState(initialVal);
  const [isError, setIsError] = useState(initialVal);
  const cityId = 1609350;

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/.netlify/functions/fetch-weather?city=${cityId}`);

        const {
          data: { main, wind, sys },
        } = response;

        dispatch(setTempMin(main.temp_min));
        dispatch(setTempMax(main.temp_max));
        dispatch(setWindDir(wind.deg));
        dispatch(setWindSpeed(wind.speed));
        dispatch(setSunrise(sys.sunrise));
        dispatch(setSunset(sys.sunset));

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchWeather();
  }, []);

  return { state, isLoading, isError };
}
