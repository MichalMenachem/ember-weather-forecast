import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ember-weather-forecast/config/environment';

export default class WeatherForecastLocationAdapter extends JSONAPIAdapter {
  host = '//dataservice.accuweather.com/forecasts/v1/daily/5day/';

  urlForFindRecord(locationId) {
    // NOTE: uncomment mock if do not want to make real API call
    return this.urlPrefix(`/${locationId}?apikey=${ENV.API_KEY}`);
    // return this.urlPrefix('/mock/forecast.json');
  }
}
