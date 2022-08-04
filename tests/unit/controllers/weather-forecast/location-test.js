import { module, test } from 'qunit';
import { setupTest } from 'ember-weather-forecast/tests/helpers';

module('Unit | Controller | weather-forecast/location', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:weather-forecast/location');
    assert.ok(controller);
  });
});
