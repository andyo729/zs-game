import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePointType() {
      return this.get('model').save()
        .then(() => this.transitionToRoute('application'));
    }
  }
});
