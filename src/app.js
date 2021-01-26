import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { WeatherContainer } from './containers/weather';
import './translations/i18n';

export default function App() {
  return (
    <>
      <WeatherContainer />
    </>
  );
}
