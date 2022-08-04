import JSONAPISerializer from '@ember-data/serializer/json-api';

const getWeatherIcon = (iconId) =>
  `/assets/images/weather-conditions/${iconId}.svg`;

const fahrenheitToCelsius = (fahrenheit) =>
  Math.round(((fahrenheit - 32) * 5) / 9);

export default class LocationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const dailyForecasts = payload.DailyForecasts.map((dailyForecast) => ({
      date: dailyForecast.Date,
      timestamp: dailyForecast.EpochDate,
      minTemp: `${fahrenheitToCelsius(
        dailyForecast.Temperature.Minimum.Value
      )}°C`,
      maxTemp: `${fahrenheitToCelsius(
        dailyForecast.Temperature.Maximum.Value
      )}°C`,
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
