import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vote', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vote');
    assert.ok(route);
  });
});
