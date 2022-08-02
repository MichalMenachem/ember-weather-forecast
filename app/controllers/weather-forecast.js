import Controller from '@ember/controller';

export default class WeatherForecastController extends Controller {
  michal = "Michhhhhhi";
  init() {
    super.init(...arguments);
    console.log('init');
  }
}
