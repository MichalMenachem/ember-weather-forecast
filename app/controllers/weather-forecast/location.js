import Controller from '@ember/controller';
import {service} from '@ember/service';

export default class WeatherForecastLocationController extends Controller {
  @service loader;

  get loading() {
    return this.loader.getLoading();
  }
}
