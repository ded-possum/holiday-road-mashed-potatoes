let itineraryArray = []

export const useItinerary = () => {
    return itineraryArray.slice()
}

export const getItinerary = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(jsonstuff => jsonstuff.json()
        .then(responsejson => {
            itineraryArray = responsejson
        }))
}

export const saveItinerary = (itinerary) => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItinerary)
}
