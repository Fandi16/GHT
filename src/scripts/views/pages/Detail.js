import UrlParser from '../../routes/url-parser';
import data from './DATA.json';

const Detail = {
  async render() {
    return `
          <div id="detailDestination" class="detailDestination"></div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const destinationId = url.id;
    const destination = data.wisata.find((r) => r.id === destinationId);

    const detailDestinationElement = document.querySelector('#detailDestination');
    detailDestinationElement.innerHTML = `
      <img src="${destination.pictureId}" alt="${destination.name}" title="${destination.name}">
      <h3>${destination.name}</h3>
    `;
  },
};

export default Detail;
