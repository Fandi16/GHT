import data from './DATA.json';

const Home = {
  async render() {
    return `
        <div class="content">
            <div class="information">
                <div class="content-description">
                    <h1 class="title">Discover Your Destination</h1>
                    <p>
                        Temukan tujuan wisata sesuai keinginanmu untuk menikmati liburan yang luar biasa dan tak
                        terlupakan.
                    </p>
                </div>
                <div class="content-image">
                    <img src="../image/destination.jpg" alt="Destination">
                </div>

                <div class="content-description">
                    <h1 class="title">Choose Your Perfect Accommodation</h1>
                    <p>
                        Pilih penginapan yang nyaman sesuai preferensimu untuk nikmati liburanmu. Tersedia berbagai
                        pilihan penginapan sesuai kebutuhan dan keinginanmu.
                    </p>
                </div>
                <div class="content-image">
                    <img src="../image/accommodation.jpg" alt="Destination">
                </div>
            </div>
        </div>

        <div class="content-wisata">
            <div class="content">
                <h1>TOP Destination</h1>
            </div>

            <div class="list" id="tes"></div>
    
            <div class="content">
                <button><a href="/#/explore">More Destination</a></button>
            </div>
        </div>

        <div class="source">Destination Source: <span><a href="https://www.idntimes.com/"><b>IDN Times</b></a></span></div>
    `;
  },

  async afterRender() {
    const listElement = document.querySelector('#tes');
    const firstThreeDestination = data.wisata.slice(0, 3);

    firstThreeDestination.forEach((destination) => {
      const listItem = `
          
              <div class="card">
                  <div class="face front">
                      <img src="${destination.pictureId}" alt="${destination.name}" title="${destination.name}">
                      <h3>${destination.name}</h3>
                  </div>
                  <div class="face back">
                      <h3>${destination.name}</h3>
                      <p>CEK IN MORE DESTINATION</p>
                      <div class="link">
                      </div>
                  </div>
              </div>
      `;

      listElement.innerHTML += listItem;
    });
  },
};

export default Home;
