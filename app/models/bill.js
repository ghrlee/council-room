import DS from 'ember-data';
import { computed } from '@ember/object'; 
const { Model } = DS;
import { dasherize } from '@ember/string';

export default Model.extend({
  counts: DS.attr(),
  bill: DS.attr(), 
  motion_text: DS.attr(),
  result: DS.attr(),
  motion_classification: DS.attr(),
  organization: DS.attr(),
  updated_at: DS.attr(),
  start_Date: DS.attr(),
  slug: computed('identifier', function(){
    return dasherize(this.bill.identifier);
  })

  // "counts": [],
  // "bill": {
  //   "id": "ocd-bill/0211e7c6-7d3e-4a85-9f87-8c4534ecfbeb",
  //   "identifier": "Or2019-226"
  // },
  // "id": "ocd-vote/9f21801f-de45-49bf-b664-cd8c1b92849d",
  // "motion_text": "Passed",
  // "result": "pass",
  // "motion_classification": [],
  // "organization": {
  //   "name": "Chicago City Council",
  //   "id": "ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a"
  // },
  // "updated_at": "2019-07-15T13:38:29.739168+00:00",
  // "extras": {},
  // "created_at": "2019-07-15T13:22:51.877191+00:00",
  // "start_date": "2019-06-12"



});
