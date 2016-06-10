import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('mail', function() {
    this.route('index', { path: '/' });
    this.route('folder', { path: 'folder/:folderId' }, function() {
      this.route('list', { path: '/' });
      this.route('email', { path: 'email/:emailId' });
    });
  });
  this.route('contacts', function(){
    this.route('contact-index', { path: 'contacts'}),
    this.route('contact-single', { path: 'contacts/:contactId'})
  });
});

export default Router;
