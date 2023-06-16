class Jumbotran extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <section class="footer">

            <div class="box-container">

                <div class="box">
                    <h3>Link Utama</h3>
                    <a href="#"> <i class="fas fa-angle-right"></i> Home</a>
                    <a href="#/explore"> <i class="fas fa-angle-right"></i> Explore</a>
                    <a href="#/about"> <i class="fas fa-angle-right"></i> About US</a>
                </div>

                <div class="box">
                    <h3>Info Kontak</h3>
                    <a href="#"> <i class="fas fa-phone"></i> +62811112225</a>
                    <a href="#"> <i class="fas fa-phone"></i> +62851111222 </a>
                    <a href="#"> <i class="fas fa-envelope"></i> greenhuntertour@gmail.com </a>
                    <a href="#"> <i class="fas fa-map"></i> NTT, Indonesia</a>
                </div>

                <div class="box">
                    <h3>Follow Kami</h3>
                    <a href="https://facebook.com/"> <i class="fab fa-facebook-f"></i> facebook </a>
                    <a href="https://twitter.com/"> <i class="fab fa-twitter"></i> twitter </a>
                    <a href="https://www.instagram.com/"> <i class="fab fa-instagram"></i> instagram </a>
                    <a href="https://www.linkedin.com/"> <i class="fab fa-linkedin"></i> linkedin </a>
                </div>

            </div>

            <div class="credit"> Copyright <span>Green Hunter Tour </span> 2023 </div>
        </section>
    `;
  }
}

customElements.define('footer-element', Jumbotran);
