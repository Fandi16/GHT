/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import data from './DATA.json';

const Detail = {
  async render() {
    return `
          <div id="detailDestination" class="detailDestination"></div>
          <div class="source">Acomodation Source: Clicking on the inn's name will take you directly to the content source.</div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const destinationId = url.id;
    const destination = data.wisata.find((r) => r.id === destinationId);

    const detailDestinationElement = document.querySelector('#detailDestination');
    detailDestinationElement.innerHTML = `
      <img src="${destination.pictureId}" class="imgdetail" alt="${destination.name}" title="${destination.name}">
      <div class="detailinfo">
      <h1>${destination.name}</h1>
        <p class="isidetail">${destination.description}</p>
        <h4>Address</h4>
        <p class="alamatdetail">${destination.location}</p>
        <p class="tiket">Harga Tiket : ${destination.price}</p>
        <p class="waktu">Time ${destination.time}</p>
      </div>

      <div class="penginapan">
        <h3>Penginapan</h3>
        <div id="penginapanList"></div>
      </div>
    `;

    const penginapanListElement = document.querySelector('#penginapanList');
    destination.penginapan.forEach((penginapan) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="listpenginapan">
        <a href="${penginapan.linkH}">${penginapan.nameH}</a>
        <img src="${penginapan.gambarH}" class="imgpenginapan" alt="${penginapan.nameH}" title="${penginapan.nameH}">
        <p>⭐️ ${penginapan.rateH}</span></p>
      </div>
      `;
      penginapanListElement.appendChild(div);
    });
  },
};

export default Detail;
