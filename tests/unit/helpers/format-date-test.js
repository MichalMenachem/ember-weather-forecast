import { formatDate } from 'ember-weather-forecast/helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format-date', function () {
  test('formats date by requested format', function (assert) {
    assert.deepEqual(
      formatDate(['2022-07-20T20:00:00+03:00', 'DD/MM']),
      '20/07'
    );
  });
});
