export const Eatery = (eateryObject) => {
    return `
        <div class="eateryList-card">
            <div id="eateryName"><h4>${eateryObject.businessName}<h4></div>
            <button id="details__${eateryObject.id}" class="btn btn-success btn-sm">for more details click here</button>
            <div class="hide-att" style="display: none">
                <div class="eateryLocation"><strong>Location:</strong> ${eateryObject.city}, ${eateryObject.state}</div>
                <div class="eateryAbout"><p>${eateryObject.description}</p></div>
                <div class="eateryAmeneties"><h6><strong>Ameneties:</strong></h6>
                    <ul id ="ameneties" class="amenetiesEatList">
                        ${Ameneties(eateryObject.ameneties)}
                    </ul>
                </div>
            </div>
        </div>
    `
}
//Ameneties:  petFriendly, wifi, diaperFacility, playground, restrooms, wheelchairAccessible

function Ameneties(currentObject){

    let htmlRepresentation = ""
        for (let singleAmenety in currentObject) {
            if (currentObject[singleAmenety] === true) {
                let src = ""
                switch (singleAmenety) {
                    case "wheelchairAccessible": 
                    src="https://img.icons8.com/ios/50/000000/wheelchair.png"
                    break
                    case "petFriendly": 
                    src="https://img.icons8.com/ios/50/000000/pet.png"
                    break
                    case "wifi": 
                    src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-wifi-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"
                    break
                    case "diaperFacility": 
                    src="https://img.icons8.com/ios/50/000000/safety-pin.png"
                    break
                    case "playground": 
                    src="https://img.icons8.com/ios/50/000000/playground.png"
                    break
                    case "restrooms": 
                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-restroom-airport-kiranshastry-lineal-kiranshastry.png"
                    break
                }
                
                htmlRepresentation += `<li><img src="${src}" alt="icon" class="amenetiesEatIcon"/></li>`
            }
        }
    // console.log(htmlRepresentation)
    return htmlRepresentation
}

// alternate function that loops through entire ameneties and lists them just as a bulleted list instead of as icons like above

// function Ameneties(currentObject){

//     let htmlRepresentation = ""
//         for (let singleAmenety in currentObject){
//             if(currentObject[singleAmenety] === true) {
//                 let htmlString = `
//                     <li>${singleAmenety}</li>
//                 `
//             htmlRepresentation += htmlString
//         }
//     }
//     return htmlRepresentation
// }