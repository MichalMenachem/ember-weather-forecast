import Component from '@glimmer/component';

export default class NavBarComponent extends Component {
  routes = [
    { route: 'weather-forecast', name: 'Weather Forecast' },
    { route: 'about', name: 'About' },
  ];
}
