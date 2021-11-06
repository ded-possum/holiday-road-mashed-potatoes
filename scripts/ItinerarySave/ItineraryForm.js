import { saveItinerary } from "./ItinerarySaveProvider.js";
import { itineraryList } from "./ItinerarySaveList.js";

const contentAccuracy = document.querySelector(".itineraryFormContainer")

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {
        
        const newItinerary = {
            
            Park: document.querySelector("#parkFilter").value,
            Bizarre: document.querySelector("#attractionSelect").value,
            Eatery: document.querySelector("#eaterySelect").value
        }
        console.log(newItinerary)
        
        // document.querySelector("#park-name").value = ""
        // document.querySelector("#name-biz").value = ""
        // document.querySelector("#eateryName").value = ""
        saveItinerary(newItinerary)
        .then(itineraryList)
    }
})

export const ItineraryForm = () => {
    contentAccuracy.innerHTML = `
        <aside>
            <button id="saveItinerary" class="btn btn-outline-success">Save Itinerary</button>
        </aside>`
}