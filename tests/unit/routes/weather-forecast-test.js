import { module, test } from 'qunit';
import { setupTest } from 'ember-weather-forecast/tests/helpers';

module('Unit | Route | weather-forecast', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:weather-forecast');
    assert.ok(route);
  });
});
