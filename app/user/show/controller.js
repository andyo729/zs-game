const { moment } = window;

import Ember from 'ember';

export default Ember.Controller.extend({
  pointsThisWeek: Ember.computed('model.user.points.@each.createdOn', function() {
    const points = this.get('model.user.points').toArray();

    return points.filter((point) => {
      const createdOn = moment(point.get('createdOn'));
      return createdOn.isSame(moment(), 'week');
    });
  }),
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
