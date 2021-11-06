import { settings } from '../Settings.js';

let parks = [];

export const useParks = () => {
  return parks.slice();
}

export const getParks = () => {
  return fetch(`https://developer.nps.gov/api/v1/parks?limit=500&api_key=${settings.npsKey}`)
  .then(res => res.json())
  .then(res => parks = res.data);
}