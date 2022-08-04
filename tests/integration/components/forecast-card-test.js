import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-weather-forecast/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forecast-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ForecastCard />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ForecastCard>
        template block text
      </ForecastCard>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
