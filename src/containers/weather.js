import 'regenerator-runtime/runtime';
import React, { useState, useEffect, Fragment, useReducer } from 'react';
import { useTranslation } from 'react-i18next';

import Weather from '../components/weather';
import umbrella from '../images/assorted-color-umbrella.jpg';
import { setTempMin, setTempMax, setWindDir, setWindSpeed, setSunrise, setSunset } from '../reducers/temperatureReducer';
import useWeather from '../customHooks/useWeather';
import { degreeToDirection, formatToLocale, meterToKilometer } from '../utils';

export function WeatherContainer() {
  const { t, i18n } = useTranslation();
  const { state, isLoading, isError } = useWeather(false);

  const { tempMin, tempMax, windDir, windSpeed, sunrise, sunset } = state;

  return (
    <Weather>
      {isError && <Weather.Notification>Sorry, Something went wrong.</Weather.Notification>}
      {isLoading ? (
        <Weather.Notification>Loading...</Weather.Notification>
      ) : (
        <Fragment>
          <Weather.Header>{t('Weather Forecast')}</Weather.Header>
          <Weather.Card>
            <Weather.CardContainer>
              <Weather.Column mobile={16} computer={8}>
                <Weather.Img src={umbrella} alt="Umbrella" />
              </Weather.Column>
              <Weather.Column mobile={16} computer={8}>
                <Weather.Info>
                  <Weather.Title>{t('Bangkok, Thailand')}</Weather.Title>
                  <Weather.StatsGroup widths="one">
                    <Weather.StatsInner responsive="true">
                      <Weather.Label>{t('Min')}</Weather.Label>
                      <Weather.Value>{tempMin}°C</Weather.Value>
                    </Weather.StatsInner>
                    <Weather.StatsInner responsive="true">
                      <Weather.Label>{t('Max')}</Weather.Label>
                      <Weather.Value>{tempMax}°C</Weather.Value>
                    </Weather.StatsInner>
                  </Weather.StatsGroup>
                  <Weather.Divider section />
                  <Weather.StatsGroup widths="one" size="small">
                    <Weather.StatsInner responsive="true">
                      <Weather.Label>{t('Wind Speed')}</Weather.Label>
                      <Weather.Value>
                        {meterToKilometer(windSpeed)} {t('km/h')}
                      </Weather.Value>
                    </Weather.StatsInner>
                    <Weather.StatsInner responsive="true">
                      <Weather.Label>{t('Wind Direction')}</Weather.Label>
                      <Weather.Value>{degreeToDirection(windDir)}</Weather.Value>
                    </Weather.StatsInner>
                    <Weather.StatsInner responsive="true">
                      <Weather.Label>{t('Sunrise')}</Weather.Label>
                      <Weather.Value>
                        <Weather.Icon name="sun" color="red" />
                        {formatToLocale(sunrise)}
                      </Weather.Value>
                    </Weather.StatsInner>
                    <Weather.StatsInner responsive="true">
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
              </Weather.Column>
            </Weather.CardContainer>
          </Weather.Card>
        </Fragment>
      )}
    </Weather>
  );
}
