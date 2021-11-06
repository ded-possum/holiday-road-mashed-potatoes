import { getParks, useParks } from "./ParkProvider.js";
import { parkSelectEvent } from "./events.js";

const contentTarget = document.querySelector('.parksDropdown');

export const ParkSelect = () => {
  getParks().then(() => {
    const allParks = useParks();
    contentTarget.innerHTML = render(allParks);
  });
}

const render = (parks) => {
  return `
    <select id="parkFilter">
      <option value="0">Please select a park</option>
      ${
        parks.map(park => `<option>${park.fullName}</option>`)
      }
    </select>
  `;
}
// This section populates Latitude and Longitude for the weather API
document.querySelector('body').addEventListener('change', parkSelectEvent);