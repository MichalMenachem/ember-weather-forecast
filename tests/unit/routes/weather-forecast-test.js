import { module, test } from 'qunit';
import { setupTest } from 'ember-weather-forecast/tests/helpers';
import { visit, fillIn } from '@ember/test-helpers';

const LOCATION_ID = '4444';

module('Unit | Route | weather-forecast', function (hooks) {
  setupTest(hooks);

  test('button is disabled when text box is empty', async function (assert) {
    await visit('/weather-forecast');
    assert.dom('[data-test-input]').hasNoText();
    assert.dom('[data-test-button]').isDisabled();
  });

  test('button is enabled when text box is not empty', async function (assert) {
    await visit('/weather-forecast');
    await fillIn(this.element.querySelector('[data-test-input]'), LOCATION_ID);
    assert.dom('[data-test-button]').isEnabled();
  });
});
