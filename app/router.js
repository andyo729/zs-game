import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', { path: '/user/' }, function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });

  this.route('point-type', function() {
    this.route('new');
  });
});

export default Router;
