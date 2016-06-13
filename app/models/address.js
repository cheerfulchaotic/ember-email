import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  value: attr('string'),
  type: attr('string'),
  is_primary: attr('boolean')
});
