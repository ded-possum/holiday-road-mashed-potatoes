import { getParkEvents, useParkEvents } from "./ParkEventsProvider.js";
import { ParkEvents } from "./ParkEvents.js";

const parkEventsTarget = document.querySelector("")

export const ParkEventsList = () => {
    getParkEvents()
    .then(() => {
        let parkEventsArray = useParkEvents();
        let parkEventsHTML = "";

        if(parkEventsFilter){
            parkEventsArray = parkEventsFilter.map(value => {
                return parkEventsArray.find(parkEvents => {
                    return parkEvents.parkfullname === value
                })
            })
        }

        parkEventsArray.forEach((parkEventsObj) => {
            parkEventsHTML += ParkEvents(parkEventsObj)
        })

        parkEventsTarget.innerHTML = parkEventsHTML
    })
}

// Stretch Goal: Park Events
// Add a button to a saved itinerary labeled Events. When the user clicks the button, query the NPS API to get the first two events (use the limit query parameter) for that park. Then display the following data in a dialog box.

// title
// dateStart
// timeStart
// timeEnd
// description
// feeInfo