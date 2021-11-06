export const bizarreCard = (bizarreries) => {
    return `
        <div class="biz-card">
            <div id="name-biz"><h4>${bizarreries.name}</h4></div>
            <button id="details__biz_${bizarreries.id}" type="button" class="btn btn-success btn-sm">for more details click here</button>
            
        <div id="hidden-details" class="hide-att">
            <div class="state-name"><strong>State: ${bizarreries.state}</strong></div>
            <div class ="biz-description">${bizarreries.description}</div>
            <div class="attractionAmeneties"><h6><strong>Ameneties:</strong></h6>
                <ul id="ameneties">
                    ${Ameneties(bizarreries.ameneties)}
                </ul>
        </div>
        </div>     
    `
}



document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "details__biz_") {
        document.querySelector("#hidden-details").classList.toggle("hide-att")
}
})


function Ameneties(currentObject){

    let htmlRepresentation = ""
        for (let singleAmenety in currentObject){
            if(currentObject[singleAmenety] === true) {
                let htmlString = `
                    <li>${singleAmenety}</li>
                `
            htmlRepresentation += htmlString
        }
    }
    return htmlRepresentation
}

