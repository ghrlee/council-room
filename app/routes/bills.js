import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let Bill = EmberObject.extend({
  results:   
    [
      {
        updated_at: '', 
        identifier: '', 
        subject: [''], 
        from_organization: {
          name: '', 
          id: '', 
          jurisdiction: {
            name: '', 
            id: ''
          }
        }, 
        title: '', 
        id: '', 
        classification: ['']
      }
    ]
});

export default Route.extend({

  model() {
    let ledZeppelin = Bill.create(
      { 
        results: 
        [
            {
              updated_at: "2019-07-29T14:55:15.382659+00:00", 
              identifier: "Or2019-224", 
              subject: ["Lawsuits"], 
              from_organization: {
                name: "Chicago City Council", 
                id: "ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a", 
                jurisdiction: {
                  name: "Chicago City Government", 
                  id: "ocd-jurisdiction/country:us/state:il/place:chicago/government"
                }
              }, 
              title: "Settlement agreement regarding case of Kelsey Ibach, Bradley Schaum, Brittney Zingsheim v. Philip Cho...", 
              id: "ocd-bill/19737862-9de5-4b8a-93a2-445d408beeec", 
              classification: ["order"]
            }
          ]
      });

  return A([ledZeppelin]); }
});

// [
//   {
//     updated_at: "2019-07-29T14:55:15.382659+00:00", 
//     identifier: "Or2019-224", 
//     subject: ["Lawsuits"], 
//     from_organization: {
//       name: "Chicago City Council", 
//       id: "ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a", 
//       jurisdiction: {
//         name: "Chicago City Government", 
//         id: "ocd-jurisdiction/country:us/state:il/place:chicago/government"
//       }
//     }, 
//     title: "Settlement agreement regarding case of Kelsey Ibach, Bradley Schaum, Brittney Zingsheim v. Philip Cho, individually, Pure Soul Entertainment LLC, by and through its authorized agents and employees including but not limited to, Philip Cho, 306 N. Halsted, Inc. d.b.a The Mid, by and through its authorized agents and empoyees, The Hubbard House Restaurant, LLC d/b/a Hubbard Inn, by and through its authorized agents and employees West Loop Management 1, LLC, by and through its authorized agents and employees, City of Chicago, a Municipal Corporation, by and through its authorized agents and employees, Case No. 14 L 10446, consolidated with, Kara Principe v. Philip Cho, individually, Pure Soul Entertainment, LLC, by and through its authorized agents and emloyees including but not limited to, Philip Cho, 306 N. Halsted, Inc. d.b.a.The Mid, by and through its authorized agents and employees, The Hubbard House Restaurant, LLC d.b.a. Hubbard Inn, by and through its authorized agents and employees, West Loop Management 1, LLC, by and through its authorized agents and employees, City of Chicago, a Municipal Corporation, by and through its authorized agents and employees, cited as 15 L 7941 (Circuit Court of Cook County, Illinois)", 
//     id: "ocd-bill/19737862-9de5-4b8a-93a2-445d408beeec", 
//     classification: ["order"]
//   }
// ]
