const Images = (arr) => {
  let imgHTML = '';
  arr.forEach( img => {

    imgHTML += `
      <img style="width:500px; height:500px;" src="${img.url}" alt="${img.altText}" />
    `;

  });
  return imgHTML;
}

export const Park = (obj) => {
  return ` 
    <h2>National Parks</h2>
    <div class="park-card card">
      <h4 id="park-name" class="park-headline d-inline-block">${obj.fullName}</h4>
      <button id="details__${obj.id}" class="btn btn-success">Details</button>
      <div style="display: none;">
        <p class="park-number"><strong>Phone:</strong> ${obj.contacts.phoneNumbers[0].phoneNumber}</p>
        <div class="address">
          <p><strong>Address:</strong></p>
          <p class="add-line1">${obj.addresses[0].line1}</p>
          <p class="add-line2">${obj.addresses[0].line2}</p>
          <p class="add-line3">${obj.addresses[0].line3}</p>
          <p class="add-line4">${obj.addresses[0].city} ${obj.addresses[0].stateCode} ${obj.addresses[0].postalCode}</p>
        </div>
        <p class="park-description">${obj.description}</p>
        <div class="park-images d-flex">
          ${Images(obj.images)}
        </div>
      </div>
    </div>
  `;
}

document.querySelector('.itenaryPreviewArea').addEventListener('click', e => {
  if (e.target.id.startsWith('details__')) {
    if (e.target.nextElementSibling.style.display === '' || e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  }
});