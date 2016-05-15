import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  pointType: DS.belongsTo('pointType'),
  user: DS.belongsTo('user')
});
