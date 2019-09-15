import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let bills = this.modelFor('bills');
    return bills.findBy('slug', params.slug);
  }
});
