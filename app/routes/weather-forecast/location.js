import Route from '@ember/routing/route';
import { service } from '@ember/service';

const pause = (t) => new Promise((res) => setTimeout(res, t));

export default class WeatherForecastLocationRoute extends Route {
  @service store;
  @service loader;

  async model(params) {
    this.loader.setLoading(true);
    const location = await this.store.findRecord(
      'location',
      params.location_id
    );
    await pause(3000);
    this.loader.setLoading(false);

    return location;
  }
}
