import { bizarreCard } from './AttractionsCard.js'
import { getAttractions, useAttractions } from './AttractionProvider.js'

const contentTarget = document.querySelector(".attractionsList")

export const AttractionsList = (attractionsFilter) => {
    let attractionsListContainer = document.querySelector(".attractionsList");
    attractionsListContainer.innerHTML = "";
    
    getAttractions()
    .then(() => {
        let attractionsArray = useAttractions();
        let attractionHTML = "";

        if(attractionsFilter){
            attractionsArray = attractionsFilter.map(value => {
                return attractionsArray.find(singleAttractionInLoop => {
                return singleAttractionInLoop.name === value
            })
        })
    }
    
        attractionsArray.forEach((attractionsObject) => {
            attractionHTML += bizarreCard(attractionsObject)
        })

        contentTarget.innerHTML = `
        <h2>Attractions</h2>
        <div class="attractionsList card">${attractionHTML}</div>
        `
    })
}


