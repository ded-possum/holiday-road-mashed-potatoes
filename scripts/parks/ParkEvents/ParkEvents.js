export const ParkEvents = (events) => {
    return `
        <div class ="parkEventsDiv">
            <button id="details__${events.id}" class="btn btn-outline-info">Park Events</button>
            <div class="parkEvents-card hide-att" style="display: none">
                <div class="parkEventsName"><h4><strong>${events.parkfullname}</strong><h4></div>
                <div class="parkEventDate"><strong>Date:</strong> ${events.dateStart}</div>
                <div class="parkEventTimes"><strong>Time:</strong> ${events.times.timestart} - ${events.times.timeend}</div>
                <div class="parkEventsAbout"><p>${events.description}</p></div>
                <div class="parkEventFee"><strong>Fee Info:</strong> ${events.feeinfo}</div>
            </div>
        </div>
    `
}

// Stretch Goal: Park Events
// Add a button to a saved itinerary labeled Events. When the user clicks the button, query the NPS API to get the first two events (use the limit query parameter) for that park. Then display the following data in a dialog box.

// title
// dateStart
// timeStart
// timeEnd
// description
// feeInfo
