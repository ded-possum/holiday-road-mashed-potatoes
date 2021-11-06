let eatery = []

export const useEatery = () => {
    return eatery.slice()
}

export const getEatery = () => {
    return fetch ("http://holidayroad.nss.team/eateries")

    .then(messyEateryList => messyEateryList.json())

    .then(sortedEateryList => {
            // console.table(sortedEateryList)
            eatery = sortedEateryList
        }
    )
}