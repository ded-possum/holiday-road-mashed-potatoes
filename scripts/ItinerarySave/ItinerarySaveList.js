import { getItinerary, useItinerary } from "./ItinerarySaveProvider.js"
import { itinerary } from "./ItinerarySaveCard.js"

const contentTarget = document.querySelector(".print-itinerary")

export const itineraryList = () => {
  getItinerary()
  .then(() => {

    let allTheItineraries = useItinerary();

    let itineraryHTML = "";
   
    allTheItineraries.forEach((singleItinerary) => {

        itineraryHTML += itinerary(singleItinerary);
    });

    contentTarget.innerHTML = `
    <h2>Itinerary</h2>
    ${itineraryHTML}`

  });
};
