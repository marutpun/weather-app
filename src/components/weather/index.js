import React from 'react';
import { Container, Divider, Statistic, Select, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { Header, Card, ColumnImg, ColumnText, Img, Info, Title } from './styles/weather';
import languageCode from '../../language.json';

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
  const { i18n } = useTranslation();
  

  const _handleChangeLanguage = (event, { value }) => {
    if (value === 'en') {
      i18n.changeLanguage('en');
    } else if (value === 'fr') {
      i18n.changeLanguage('fr');
    } else if (value === 'th') {
      i18n.changeLanguage('th');
    }
  };

  return (
    <Select
      placeholder="Choose your language"
      options={languageCode}
      defaultValue={i18n.language}
      onChange={_handleChangeLanguage}
      {...restProps}
    />
  );
};
