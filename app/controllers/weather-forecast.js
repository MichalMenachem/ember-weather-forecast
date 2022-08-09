import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class WeatherForecastController extends Controller {
  @tracked locationId = '';
  @service router;
  @service loader;

  @action
  onLocationIdChange({ target: { value } }) {
    this.locationId = value;
  }

  @action
  submit() {
    this.router.transitionTo(`/weather-forecast/location/${this.locationId}`);
  }

  get loading() {
    return this.loader.getLoading();
  }
}
