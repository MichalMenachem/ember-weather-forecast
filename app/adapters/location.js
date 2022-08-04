import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ember-weather-forecast/config/environment';

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/
export default class WeatherForecastLocationAdapter extends JSONAPIAdapter {
  // host = '//dataservice.accuweather.com/forecasts/v1/daily/5day/';
  // namespace = "forecasts/v1/daily/5day/";

  urlForFindRecord(locationId) {
    // TODO: replace with real url
    // return `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationId}?apikey=${ENV.API_KEY}`;
    // return this.urlPrefix(`/${locationId}?apikey=${ENV.API_KEY}`);
    return this.urlPrefix('/mock/forecast.json');
  }
}
