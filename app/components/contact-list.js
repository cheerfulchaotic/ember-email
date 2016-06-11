import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedContacts: Ember.computed.sort('contacts', 'sortCriteria'),
  sortCriteria: ['name']
});
