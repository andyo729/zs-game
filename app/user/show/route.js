import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const { id } = params;
    return Ember.RSVP.hash({
      user: this.store.find('user', id),
      pointTypes: this.store.findAll('pointType')
    });
  }
});
