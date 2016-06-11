import Ember from 'ember';

export default Ember.Route.extend({
  model(contactId){
    return this.store.findAll('contact');
  }
});
