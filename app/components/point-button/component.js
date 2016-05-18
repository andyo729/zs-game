import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['btn-default', 'btn'],
  pointType: null,
  tagName: 'button',
  click() {
    const { user, pointType } = this.getProperties('user', 'pointType');
    this.sendAction('addPoint', user, pointType);
  }
});
