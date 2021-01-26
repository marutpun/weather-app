import i18n from '../translations/i18n';

export function degreeToDirection(degree) {
  const { t } = i18n;
  let direction = '';

  if ((degree >= 0 && degree <= 22.5) || (degree > 337.5 && degree <= 360)) {
    direction = i18n.t('North');
  } else if (degree > 22.5 && degree <= 67.5) {
    direction = i18n.t('North East');
  } else if (degree > 67.5 && degree <= 112.5) {
    direction = i18n.t('East');
  } else if (degree > 112.5 && degree <= 157.5) {
    direction = i18n.t('South East');
  } else if (degree > 157.5 && degree <= 202.5) {
    direction = i18n.t('South');
  } else if (degree > 202.5 && degree <= 247.5) {
    direction = i18n.t('South West');
  } else if (degree > 247.5 && degree <= 292.5) {
    direction = i18n.t('West');
  } else if (degree > 292.5 && degree <= 337.5) {
    direction = i18n.t('North West');
  } else {
    direction = i18n.t('N/A');
  }
  return direction;
}

export function formatToLocale(timestamp) {
  let date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  return `${hours}:${minutes.substr(-2)}`;
}
