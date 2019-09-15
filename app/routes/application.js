// app/routes/application.js
import Route from '@ember/routing/route'; 
import EmberObject from '@ember/object'; 
import { A } from '@ember/array';

let Bill = EmberObject.extend({
  bill: '',
  counts: [],
  created_at: '',
  extras: {},
  id: '',
  motion_classification: [],
  organization: {},
  result: '',
  start_date: '',
  updated_at: ''
});

export default Route.extend({ 
  model() {
    let blackDog = Bill.create({
                      bill: { 
                              id: 'ocd-bill/19737862-9de5-4b8a-93a2-445d408beeec', 
                              identifier: 'Or2019-224'
                            },
                    counts: [],
                created_at: '2019-07-15T13:22:52.715647+00:00',
                    extras: {},
                        id: 'ocd-vote/9d2a384b-3ebb-4da8-8c8c-66ba3c088e19',
    motion_classification: [],
              motion_text: 'Passed',
             organization: {
                            id: 'ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a',
                            name: 'Chicago City Council'
                           },
                    result: 'pass',
                start_date: '2019-06-12',
                updated_at: '2019-07-15T13:22:52.715671+00:00'
    });

    let yellowLedbetter = Bill.create({            
                    bill: { 
                            id: 'ocd-bill/6d3c6789-211e-4a49-bf03-bbca2c48683f', 
                            identifier: 'Or2019-225'
                          },
                  counts: [],
              created_at: '2019-07-15T13:22:53.098228+00:00',
                  extras: {},
                      id: 'ocd-vote/7e52869f-b178-4321-a6e9-f46ab262fcf2',
   motion_classification: [],
             motion_text: 'Passed',
            organization: {
                            id: 'ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a',
                            name: 'Chicago City Council'
                          },
                  result: 'pass',
              start_date: '2019-06-12',
              updated_at: '2019-07-15T13:22:53.098253+00:00'
    });

    let pretender = Bill.create({
                    bill: { 
                            id: 'ocd-bill/0211e7c6-7d3e-4a85-9f87-8c4534ecfbeb', 
                            identifier: 'Or2019-226'
                          },
                  counts: [],
                  created_at: '2019-07-15T13:22:51.877191+00:00',
                  extras: {},
                      id: 'ocd-vote/9f21801f-de45-49bf-b664-cd8c1b92849d',
  motion_classification: [],
            motion_text: 'Passed',
           organization: {
                          id: 'ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a',
                          name: 'Chicago City Council'
                         },
                 result: 'pass',
             start_date: '2019-06-12',
             updated_at: '2019-07-15T13:38:29.739168+00:00'
    });

  return A([blackDog, yellowLedbetter, pretender]); }
});