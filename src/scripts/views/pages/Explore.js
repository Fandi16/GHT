import data from './DATA.json';

const explore = {
  async render() {
    return `
          <h2>Now Explore Page</h2>
        `;
  },
  async afterRender() {
    const listElement = document.querySelector('#tes');

    data.wisata.forEach((destination) => {
      const listItem = `
        <div class="kategori-wisata">
            <div class="card">
                <div class="face front">
                    <img src="${destination.pictureId}" alt="${destination.name}" title="${destination.name}">
                    <h3>${destination.name}</h3>
                </div>
                <div class="face back">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <div class="link">
                        <a href="/#/detail/${destination.id}">Details</a>
                    </div>
                </div>
            </div>
        </div>
      `;

      listElement.innerHTML += listItem;
    });
  },
};

export default explore;
