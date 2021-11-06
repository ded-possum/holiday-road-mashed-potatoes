import { settings } from '../../Settings.js';

let parkEvents = [];

export const useParkEvents = () => {
  return parkEvents.slice();
}

export const getParkEvents = () => {
  return fetch(`https://developer.nps.gov/api/v1/events?api_key=${settings.npsKey}`)
  .then(res => res.json())
  .then(res => parks = res.data);
}



/////Sample of the data array:
// "data":[
//   {"location":"",
//   "updateuser":"",
//   "contactname":"Acadia Distance Learning",
//   "contacttelephonenumber":"",
//   "recurrencedateend":"",
//   "longitude":"",
//   "datestart":"2021-11-04",
//   "isrecurring":"false",
//   "datetimeupdated":"",
//   "portalname":"",
//   "types":["Talk",
//   "Virtual\/Digital"],
//   "createuser":"",
//   "isfree":"true",
//   "contactemailaddress":"acaddistancelearning@schoodicinstitute.org",
//   "regresurl":"",
//   "description":"<p>Grades 3-12: Acadia’s Top 10! (Overview of Acadia Slideshow) What makes Acadia… Acadia? Invite a ranger to your virtual space to present a slideshow showcasing the resources protected here. This overview acts as a great introduction to the Park! (45 minutes)<\/p>",
//   "images":[],
//   "category":"Regular Event",
//   "imageidlist":"",
//   "isregresrequired":"true",
//   "organizationname":"",
//   "id":"67BDC96C-ACAD-483E-0C3AEF60FB836C49",
//   "isallday":"false",
//   "dateend":"2021-11-04",
//   "sitecode":"acad",
//   "infourl":"",
//   "times":[
//       {"timestart":"10:00 AM",
//       "timeend":"10:45 AM",
//       "sunsetend":"false",
//       "sunrisestart":"false"}
//   ],
//   "regresinfo":"Email us at: acaddistancelearning@schoodicinstitute.org",
//   "timeinfo":"",
//   "categoryid":"0",
//   "eventid":"0",
//   "parkfullname":"Acadia National Park",
//   "recurrencedatestart":"2021-11-04",
//   "date":"2021-11-04",
//   "sitetype":"park",
//   "feeinfo":"",
//   "recurrencerule":"",
//   "dates":["2021-11-04"],
//   "datetimecreated":"",
//   "title":"Acadia's Top 10",
//   "latitude":"",
//   "subjectname":"",
//   "tags":[]
//   }
// ]