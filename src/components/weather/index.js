import React from 'react';
import { Container, Divider, Statistic, Select, Icon } from 'semantic-ui-react';

import { Header, Card, ColumnImg, ColumnText, Img, Info, Title } from './styles/weather';

export default function Weather({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Weather.Notification = function WeatherNotification({ children, ...restProps }) {
  return <p {...restProps}>{children}</p>;
};

Weather.Header = function WeatherHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Weather.Card = function WeatherCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Weather.ColumnImg = function WeatherColumnImg({ children, ...restProps }) {
  return <ColumnImg {...restProps}>{children}</ColumnImg>;
};

Weather.ColumnText = function WeatherColumnText({ children, ...restProps }) {
  return <ColumnText {...restProps}>{children}</ColumnText>;
};

Weather.Img = function WeatherImg({ src, alt, ...restProps }) {
  return <Img src={src} alt={alt} {...restProps} />;
};

Weather.Info = function WeatherInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Weather.Title = function WeatherTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Weather.Divider = function WeatherDivider({ ...restProps }) {
  return <Divider {...restProps} />;
};

Weather.StatsGroup = function WeatherStatsGroup({ children, ...restProps }) {
  return <Statistic.Group {...restProps}>{children}</Statistic.Group>;
};

Weather.StatsInner = function WeatherStatsInner({ children, ...restProps }) {
  return <Statistic {...restProps}>{children}</Statistic>;
};

Weather.Label = function WeatherLabel({ children, ...restProps }) {
  return <Statistic.Label {...restProps}>{children}</Statistic.Label>;
};
Weather.Value = function WeatherValue({ children, ...restProps }) {
  return <Statistic.Value {...restProps}>{children}</Statistic.Value>;
};

Weather.Icon = function WeatherSun({ ...restProps }) {
  return <Icon {...restProps} />;
};

Weather.Select = function WeatherSelect({ ...restProps }) {
  const language = [
    { key: 'en', value: 'en-us', text: 'English (Default)' },
    { key: 'th', value: 'th', text: 'ภาษาไทย' },
    { key: 'fr', value: 'fr', text: 'Français' },
  ];
  return <Select placeholder="Choose your language" options={language} {...restProps} />;
};
