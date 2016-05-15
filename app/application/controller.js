import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPoint(user, pointType) {
      const point = this.store.createRecord('point', {
        user, pointType, createdOn: new Date()
      });
      point.save();
    }
  }
});
