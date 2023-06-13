class Jumbotran extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Explore Keindahan</h1>
                <p class="hero__subtitle">
                    Nusa Tenggara Timur.
                </p>
            </div>
        </div>
    `;
  }
}

customElements.define('jumbotran-element', Jumbotran);
