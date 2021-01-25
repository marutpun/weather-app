import 'regenerator-runtime/runtime';
import React, { useState, useEffect, Fragment, useReducer } from 'react';
import axios from 'axios';

import Weather from '../components/weather';
import umbrella from '../images/assorted-color-umbrella.jpg';
import temperatureReducer, {
  initialState,
  setTempMin,
  setTempMax,
  setWindDir,
  setWindSpeed,
  setSunrise,
  setSunset,
} from '../reducers/temperatureReducer';
import { degreeToDirection } from '../utils';

export function WeatherContainer() {
  const [state, dispatch] = useReducer(temperatureReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const cityId = 1609350;

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.OPENWEATHER_API}&units=metric`
        );

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

  const { tempMin, tempMax, windDir, windSpeed, sunrise, sunset } = state;

  return (
    <Weather>
      {isError && <Weather.Notification>Sorry, Something went wrong.</Weather.Notification>}
      {isLoading ? (
        <Weather.Notification>Loading</Weather.Notification>
      ) : (
        <Fragment>
          <Weather.Header>Weather App</Weather.Header>
          <Weather.Card>
            <Weather.ColumnImg>
              <Weather.Img src={umbrella} alt="Umbrella" />
            </Weather.ColumnImg>
            <Weather.ColumnText>
              <Weather.Info>
                <Weather.Title>Bangkok, Thailand</Weather.Title>
                <Weather.StatsGroup widths="two">
                  <Weather.StatsInner>
                    <Weather.Label>Min</Weather.Label>
                    <Weather.Value>{tempMin}°C</Weather.Value>
                  </Weather.StatsInner>
                  <Weather.StatsInner>
                    <Weather.Label>Max</Weather.Label>
                    <Weather.Value>{tempMax}°C</Weather.Value>
                  </Weather.StatsInner>
                </Weather.StatsGroup>
                <Weather.Divider section />
                <Weather.StatsGroup widths="two">
                  <Weather.StatsInner>
                    <Weather.Label>Wind Speed</Weather.Label>
                    <Weather.Value text>{windSpeed} m/s</Weather.Value>
                  </Weather.StatsInner>
                  <Weather.StatsInner>
                    <Weather.Label>Wind Direction</Weather.Label>
                    <Weather.Value text>{degreeToDirection(windDir)}</Weather.Value>
                  </Weather.StatsInner>

                  <Weather.StatsInner>
                    <Weather.Label>Sunrise</Weather.Label>
                    <Weather.Value text>05:30</Weather.Value>
                  </Weather.StatsInner>

                  <Weather.StatsInner>
                    <Weather.Label>Sunset</Weather.Label>
                    <Weather.Value text>18:30</Weather.Value>
                  </Weather.StatsInner>
                </Weather.StatsGroup>
                <Weather.Divider />
                <Weather.Select />
              </Weather.Info>
            </Weather.ColumnText>
          </Weather.Card>
        </Fragment>
      )}
    </Weather>
  );
}
