import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('weather-forecast', function () {
    this.route('location', { path: '/location/:location_id' });
  });
  this.route('about');
  this.route('not-found', { path: '/*path' });
});
