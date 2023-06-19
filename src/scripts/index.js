import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/jumbotran';
import './components/footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const hamburgerButtonElement = document.querySelector('#hamburgerButton');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('#menu');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});
const app = new App({
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
