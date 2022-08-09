import JSONAPISerializer from '@ember-data/serializer/json-api';

const getWeatherIcon = (iconId) =>
  `/assets/images/weather-conditions/${iconId}.svg`;

export default class LocationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id) {
    console.log({ payload });
    const dailyForecasts = payload.DailyForecasts.map((dailyForecast) => ({
      date: dailyForecast.Date,
      timestamp: dailyForecast.EpochDate,
      minTemp: dailyForecast.Temperature.Minimum.Value,
      minTempUnit: dailyForecast.Temperature.Minimum.Unit,
      maxTemp: dailyForecast.Temperature.Maximum.Value,
      maxTempUnit: dailyForecast.Temperature.Maximum.Unit,
      dayIcon: getWeatherIcon(dailyForecast.Day.Icon),
      dayPhrase: dailyForecast.Day.IconPhrase,
      nightIcon: getWeatherIcon(dailyForecast.Night.Icon),
      nightPhrase: dailyForecast.Night.IconPhrase,
    }));

    return {
      data: {
        id,
        type: 'location',
        attributes: {
          dailyForecasts,
        },
      },
    };
  }
}
