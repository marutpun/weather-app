import 'regenerator-runtime/runtime';
import React, { useState, useEffect, Fragment, useReducer } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

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
import { degreeToDirection, formatToLocale, meterToKilometer } from '../utils';

export function WeatherContainer() {
  const [state, dispatch] = useReducer(temperatureReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { t, i18n } = useTranslation();
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
          <Weather.Header>{t('Weather Forecast')}</Weather.Header>
          <Weather.Card>
            <Weather.ColumnImg>
              <Weather.Img src={umbrella} alt="Umbrella" />
            </Weather.ColumnImg>
            <Weather.ColumnText>
              <Weather.Info>
                <Weather.Title>{t('Bangkok, Thailand')}</Weather.Title>
                <Weather.StatsGroup widths="two">
                  <Weather.StatsInner>
                    <Weather.Label>{t('Min')}</Weather.Label>
                    <Weather.Value>{tempMin}°C</Weather.Value>
                  </Weather.StatsInner>
                  <Weather.StatsInner>
                    <Weather.Label>{t('Max')}</Weather.Label>
                    <Weather.Value>{tempMax}°C</Weather.Value>
                  </Weather.StatsInner>
                </Weather.StatsGroup>
                <Weather.Divider section />
                <Weather.StatsGroup widths="two" size="small">
                  <Weather.StatsInner>
                    <Weather.Label>{t('Wind Speed')}</Weather.Label>
                    <Weather.Value>
                      {meterToKilometer(windSpeed)} {t('km/h')}
                    </Weather.Value>
                  </Weather.StatsInner>
                  <Weather.StatsInner>
                    <Weather.Label>{t('Wind Direction')}</Weather.Label>
                    <Weather.Value>{degreeToDirection(windDir)}</Weather.Value>
                  </Weather.StatsInner>

                  <Weather.StatsInner>
                    <Weather.Label>{t('Sunrise')}</Weather.Label>
                    <Weather.Value>
                      <Weather.Icon name="sun" color="red" />
                      {formatToLocale(sunrise)}
                    </Weather.Value>
                  </Weather.StatsInner>
                  <Weather.StatsInner>
                    <Weather.Label>{t('Sunset')}</Weather.Label>
                    <Weather.Value>
                      <Weather.Icon name="moon" color="yellow" />
                      {formatToLocale(sunset)}
                    </Weather.Value>
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
