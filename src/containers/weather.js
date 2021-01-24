import React from 'react';
import Weather from '../components/weather';

import umbrella from '../images/assorted-color-umbrella.jpg';

export function WeatherContainer() {
  return (
    <Weather>
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
                <Weather.Value>33°C</Weather.Value>
              </Weather.StatsInner>
              <Weather.StatsInner>
                <Weather.Label>Max</Weather.Label>
                <Weather.Value>33°C</Weather.Value>
              </Weather.StatsInner>
            </Weather.StatsGroup>
            <Weather.Divider section />
            <Weather.StatsGroup widths="two">
              <Weather.StatsInner>
                <Weather.Label>Wind Speed</Weather.Label>
                <Weather.Value text>33 m/s</Weather.Value>
              </Weather.StatsInner>
              <Weather.StatsInner>
                <Weather.Label>Wind Direction</Weather.Label>
                <Weather.Value text>Northeast</Weather.Value>
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
    </Weather>
  );
}
