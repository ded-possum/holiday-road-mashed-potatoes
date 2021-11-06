import { Eatery } from "./Eatery.js"
import { useEatery, getEatery } from "./EateryDataProvider.js"

const contentTarget = document.querySelector(".eateryList")

export const EateryList = (eateryFilter) => {
    let eateryListContainer = document.querySelector(".eateryList");
    eateryListContainer.innerHTML = ""

    getEatery()
    .then(() => {
        let eateryArray = useEatery();
        let eateryHTML = "";
    
        if(eateryFilter){
            // array is mapping the eateryFilter and matching each business name by finding the eatery in the array
            eateryArray = eateryFilter.map(value => {
                return eateryArray.find(eatery => {
                    return eatery.businessName === value
                })
            })
        }

        eateryArray.forEach((eateryObject) => {
            eateryHTML += Eatery(eateryObject)
        })

        contentTarget.innerHTML = `
            <h2>Eateries</h2>
            <div class="eatery-list card">
                ${eateryHTML}
            </div>
        `
    })
}