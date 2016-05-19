import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['post-slug'],
  publishedMonth: Ember.computed('post.published', function() {
    return moment(this.get('post.published')).format('MMM');
  }),
  publishedDay: Ember.computed('post.published', function() {
    return moment(this.get('post.published')).format('D');
  })
});
