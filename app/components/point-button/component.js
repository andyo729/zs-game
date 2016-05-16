import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  pointType: null,
  user: null,
  tagName: 'button',
  userPointsOfType: Ember.computed('pointType.points.[]', 'user.points.[]', function() {
    const { user, pointType } = this.getProperties('user', 'pointType');
    return user.get('points').toArray().filter((point) => pointType.get('points').toArray().contains(point));
  }),
  click() {
    const { user, pointType } = this.getProperties('user', 'pointType');
    this.sendAction('addPoint', user, pointType);
  }
});
