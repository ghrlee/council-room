import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bills', function() {
    this.route('bill', { path: ':slug' }, function() {
      this.route('votes');
    });
  });
});

export default Router;
