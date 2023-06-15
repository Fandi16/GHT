class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <div class="app-bar">
                <div class="app-bar__menu" id="menu">
                    <button id="hamburgerButton">☰</button>
                </div>

                <div class="app-bar__brand">
                    <h1>Green Hunter Tour</h1>
                </div>

                <nav id="drawer" class="bar-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#/explore">Explore</a></li>
                        <li><a href="#/about">About Us</a></li>
                    </ul>
                </nav>
            </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
