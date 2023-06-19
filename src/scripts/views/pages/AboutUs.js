const AboutUs = {
  async render() {
    return `
      <div class="about-us">
        <div class="inner-we-do">
          <h1>What we do</h1>
          <p>
            Website Green Hunter Tour(GHT) dibuat untuk membantu wisatawan dalam mencari informasi wisata yang ada di Provinsi Nusa Tenggara Timur, dan juga sebagai ajang promosi daerah wisata Provinsi Nusa Tenggara Timur ke seluruh masyarakat Indonesia.
            Selain itu, diharapkan dengan adanya website ini dapat membantu perekonomian para pengusaha setempat dengan meningkatnya jumlah wisatawan.
          </p>
        </div>

        <div class="teamTitle">
          <h1>Our Team</h1>
        </div> 

        <section>
          <div class="row">
            <div class="column">
              <div class="card2">
                <div class="img-container">
                  <img src="../image/member1.jpg">
                </div>
                <h3> Ilham Maulana P</h3>
                <p>Web Developer</p>
                <div class="icons">
                  <a href="https://www.instagram.com/ilhamptrr/" style="color: #e6683c;"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/ilhamptrr/" style="color: #012165;"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card2">
                <div class="img-container">
                  <img src="../image/member2.jpg">
                </div>
                <h3>Khoir Afandi</h3>
                <p>Web Developer</p>
                <div class="icons">
                  <a href="https://instagram.com/fandi.16_?igshid=ZDc4ODBmNjlmNQ==" style="color: #e6683c;"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/khoir-afandi-780433204" style="color: #012165;"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card2">
                <div class="img-container">
                  <img src="../image/member3.jpg">
                </div>
                <h3>Monica Audry</h3>
                <p>Web Developer</p>
                <div class="icons">
                  <a href="https://www.instagram.com/audry.monica/" style="color: #e6683c;"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/monica-audry-74504121a/" style="color: #012165;"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card2">
                <div class="img-container">
                  <img src="../image/member4.jpg">
                </div>
                <h3>M Isyraf Naufal A</h3>
                <p>Web Developer</p>
                <div class="icons">
                  <a href="https://www.instagram.com/isyrafna/" style="color: #e6683c;"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/muhammad-isyraf-naufal-aththabarani-b583b8215/" style="color: #012165;"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        `;
  },
  async afterRender() {
    // gak usah di isi
  },

};

export default AboutUs;
