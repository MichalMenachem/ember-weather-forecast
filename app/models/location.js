import Model, { attr } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('string') locationId;
  @attr dailyForecasts;
}
