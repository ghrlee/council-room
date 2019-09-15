import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // console.log(this.modelFor('bills.bill'))
    return this.modelFor('bills.bill')
    
  }
});