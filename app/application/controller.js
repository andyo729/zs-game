import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPoint(user, pointType) {
      const point = this.store.createRecord('point', {
        user, pointType, createdOn: new Date()
      });

      user.get('points').pushObject(point);
      pointType.get('points').pushObject(point);

      point.save()
        .then(() => user.save())
        .then(() => pointType.save());
    }
  }
});
