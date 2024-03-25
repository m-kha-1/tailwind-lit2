// import 'tailwindcss/tailwind.css';
import './styles.css';
import { html, render } from 'lit';
import './my-component';

// Créez une fonction qui renvoie le contenu à afficher dans votre composant
const template = () => html`
  <div id="app">
    <my-component></my-component>
  </div>
`;

// Rendre le contenu dans le DOM
render(template(), document.body);
