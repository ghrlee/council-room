import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object'; 

let Bill = EmberObject.extend({
  bill: '',
  created_at: '',
  id: '',
  organization: {},
  result: '',
  start_date: '',
  updated_at: '',
  votes: [],


});

let Vote = EmberObject.extend({
  result: '',
  motion_text: '',
  votes: []
});



export default Route.extend({ 
  model() {

    return this.store.findAll('bill');
  
    


      // let vote = {
      //   "counts": [],
      //   "id": "ocd-vote/515128d4-f5da-4523-9390-c5e0714c8679",
      //   "result": "pass",
      //   "start_date": "2019-06-12",
      //   "end_date": "",
      //   "sources": [
      //     {
      //       "url": "http://webapi.legistar.com/v1/chicago/matters/128132/histories",
      //       "note": ""
      //     },
      //     {
      //       "url": "https://chicago.legistar.com/LegislationDetail.aspx?ID=3964303&GUID=EB966235-E441-4C98-AABB-88117918DB6C",
      //       "note": ""
      //     }
      //   ],
      //   "extras": {},
      //   "motion_classification": [],
      //   "created_at": "2019-06-13T03:01:59.594820+00:00",
      //   "bill": {
      //     "legislative_session": {
      //       "identifier": "2019"
      //     },
      //     "id": "ocd-bill/31c0af70-0ce0-42b2-8f63-e7c24853dd00",
      //     "identifier": "O2019-3901"
      //   },
      //   "debug": null,
      //   "motion_text": "Passed as Substitute",
      //   "identifier": "",
      //   "votes": [
      //     {
      //       "voter_name": "La Spata, Daniel",
      //       "voter": {
      //         "name": "La Spata, Daniel",
      //         "id": "ocd-person/c521845f-551b-40a7-97eb-57284773f1a9",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2019-06-07T13:44:33.669",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=217135&GUID=67B0CCE6-7542-4177-A3B8-4A3A91B4484C",
      //         "updated_at": "2019-07-17T23:11:26.991",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Hopkins, Brian",
      //       "voter": {
      //         "name": "Hopkins, Brian",
      //         "id": "ocd-person/cccb0810-e697-41f6-a781-4b6246ecbbbe",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:11.443",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "",
      //         "updated_at": "2019-07-17T23:11:27.639",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Dowell, Pat",
      //       "voter": {
      //         "name": "Dowell, Pat",
      //         "id": "ocd-person/f508b010-28aa-44d2-9e16-77f09c5b056c",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:10.842",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=60949&GUID=EECABA2B-D3DD-458C-A7DA-EEE315E4BCBD",
      //         "updated_at": "2019-07-12T01:52:08.800",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "King, Sophia D.",
      //       "voter": {
      //         "name": "King, Sophia D.",
      //         "id": "ocd-person/a1d18e5b-d772-4dc4-b042-df83178f173a",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-07-03T23:27:39.251",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=167474&GUID=9F0CDCDE-8C1F-4D72-8EA2-84D90275B3DB",
      //         "updated_at": "2019-09-05T23:55:19.230",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Hairston, Leslie A.",
      //       "voter": {
      //         "name": "Hairston, Leslie A.",
      //         "id": "ocd-person/e258b1fc-1930-4a68-90bf-fc1eb983a334",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:10.668",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=60951&GUID=05B11B79-0F31-4541-8849-553167F02688",
      //         "updated_at": "2019-07-12T01:52:10.113",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Sawyer, Roderick T.",
      //       "voter": {
      //         "name": "Sawyer, Roderick T.",
      //         "id": "ocd-person/17d38e26-7d4e-4c6d-b712-a6e5d5f2bba5",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:11.122",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=64184&GUID=875783E9-DC70-42DC-89DC-B97825056D37",
      //         "updated_at": "2019-07-17T23:11:26.580",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Mitchell, Gregory I.",
      //       "voter": {
      //         "name": "Mitchell, Gregory I.",
      //         "id": "ocd-person/2fc623a0-2ccc-4a2f-a2e6-1d481a8e2acd",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:11.259",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "",
      //         "updated_at": "2019-07-17T23:11:26.946",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Harris, Michelle A.",
      //       "voter": {
      //         "name": "Harris, Michelle A.",
      //         "id": "ocd-person/399100ce-4c9f-4212-a0d0-c9d7f4375894",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:11.104",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=60954&GUID=9143E96C-800A-40DF-A603-811813DEBE6D",
      //         "updated_at": "2019-07-12T01:52:33.193",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
          
      //     {
      //       "voter_name": "Rodriguez Sanchez, Rossana",
      //       "voter": {
      //         "name": "Rodriguez Sanchez, Rossana",
      //         "id": "ocd-person/7fbfe901-daf8-4743-abcd-9f9064fed97b",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2019-06-07T13:44:34.789",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=217141&GUID=F0572063-C898-4D76-B22E-E206AC6441D2",
      //         "updated_at": "2019-07-27T02:55:51.960",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
          
      //     {
      //       "voter_name": "Gardiner, James M.",
      //       "voter": {
      //         "name": "Gardiner, James M.",
      //         "id": "ocd-person/aa2d830e-8afc-425a-8a9b-a8a6a1d53a30",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2019-06-07T13:44:35.184",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=217144&GUID=3B5FC491-91FB-4A39-AFD2-EE135FD60A5B",
      //         "updated_at": "2019-08-27T21:45:40.497",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Cappleman, James",
      //       "voter": {
      //         "name": "Cappleman, James",
      //         "id": "ocd-person/757af1a9-4ec6-41a8-b386-7b6638b78d83",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:10.682",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=64192&GUID=5D120AF2-BA39-42AE-BE13-146C4CFBD617",
      //         "updated_at": "2019-07-12T01:52:00.392",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Martin, Matthew J.",
      //       "voter": {
      //         "name": "Martin, Matthew J.",
      //         "id": "ocd-person/00eedea4-dc96-44bf-95f4-916a13bd5106",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2019-06-07T13:44:33.982",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "https://chicago.legistar.com/View.ashx?M=P&ID=217145&GUID=F96E3BA7-7867-4A18-9E47-DCC4C3395999",
      //         "updated_at": "2019-08-27T21:45:40.004",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     },
      //     {
      //       "voter_name": "Osterman, Harry",
      //       "voter": {
      //         "name": "Osterman, Harry",
      //         "id": "ocd-person/ed26421f-0586-46c1-85cd-550e6f30c87c",
      //         "biography": "",
      //         "death_date": "",
      //         "gender": "",
      //         "national_identity": "",
      //         "extras": "{}",
      //         "family_name": "",
      //         "created_at": "2017-02-20T12:36:10.888",
      //         "locked_fields": "[]",
      //         "given_name": "",
      //         "sort_name": "",
      //         "birth_date": "",
      //         "image": "",
      //         "updated_at": "2019-07-12T01:52:15.799",
      //         "summary": ""
      //       },
      //       "option": "yes",
      //       "note": ""
      //     }
      //   ],
      //   "organization": {
      //     "name": "Chicago City Council",
      //     "id": "ocd-organization/ef168607-9135-4177-ad8e-c1f7a4806c3a",
      //     "classification": "legislature"
      //   },
      //   "updated_at": "2019-07-08T13:53:55.963673+00:00",
      //   "bill_action": null
      // }
    

    // let display_results = [];

    // bills.forEach(function(element) {

    //   let current_bill = Bill.create({
    //     bill: element.bill,
    //     created_at: element.created_at,
    //     id: element.id,
    //     organization: element.organization,
    //     result: element.result,
    //     start_date: element.start_date,
    //     updated_at: element.updated_at,
    //     votes: vote,
    //   })
    //   display_results.push(current_bill)
    // });
    
    // console.log(display_results)
    // return A(display_results); 
  }

  // https://ocd.datamade.us/bills/?id=ocd-bill/19737862-9de5-4b8a-93a2-445d408beeec

  
});