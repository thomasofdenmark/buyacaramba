import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  published: DS.attr('number'),
  publishedDate: Ember.computed('published', function() {
    return moment(this.get('published')).format('MMMM Do, YYYY');
  }),
  user: DS.belongsTo('user', { async: true }),
  comments: DS.hasMany('comment', { async: true })
});
/*import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  timestamp: attr('number')
});
*/