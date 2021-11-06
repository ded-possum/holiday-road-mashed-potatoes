import { getAttractions, useAttractions } from './AttractionProvider.js'
import { AttractionsList } from './AttractionList.js'

const contentTarget = document.querySelector(".attractions-Dropdown")

export const attractionSelect = () => {

    getAttractions()
    .then(() => {
        const attractions = useAttractions()
        render(attractions)
    })
}

const render = attractionCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="attractionSelect" multiple>
            <option value="0">Please select attractions:</option>
            ${
                attractionCollection.map(attractionObject => {
                    const attractionName = attractionObject.name
                    return `<option class="attractionName">${attractionName}</option>`
                })
            }
        </select>
    `
}

const contentbullseye = document.querySelector("body")
contentbullseye.addEventListener("change", (attractionObject) => {
  
    if(attractionObject.target.id === "attractionSelect"){
       let attractArray= Array.from(attractionObject.target.selectedOptions).map(option => option.value)
       AttractionsList(attractArray)
    }
})
