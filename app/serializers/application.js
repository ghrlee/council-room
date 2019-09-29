import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.JSONSerializer.extend({
    keyForAttribute(key) {
    return decamelize(key);
  }
});