import { convertTemperature } from 'ember-weather-forecast/helpers/convert-temperature';
import { module, test } from 'qunit';

module('Unit | Helper | convert-temperature', function () {
  test('converts from celsius to fahrenheit', function (assert) {
    assert.deepEqual(convertTemperature([30, 'C', 'F']), 86);
  });

  test('converts from fahrenheit to celsius', function (assert) {
    assert.deepEqual(convertTemperature([86, 'F', 'C']), 30);
  });
});
