const template = document.createElement('template');
template.innerHTML = `
  <style>
    .collection__section {
      width: 900px;
      background-color: var(--purple);
      display: flex;
      margin-bottom: 2em;
      border-radius: 25px;
    }

    .collection__section img {
      width: 200px;
      height: auto;
      border-radius: 10px;
    }

    .collection__section .collection__details {
      display: flex;
      flex-direction: column;
      margin-left: 2em;
    }

    .collection__section .collection__details .collection__title {
      display: block;
      font-size: 2.5em;
      margin-left: 0;
      margin-right: 0;
      font-weight: 900;
    }

    .collection__section .collection__details .collection__description {
      display: block;
      font-size: 1.2em;
      margin-left: 0;
      margin-right: 0;
      font-weight: 500;
      margin-top: 1em;
    }

    .collection__section .collection__details a {
      color: unset;
      text-decoration: none;
    }

    .collection__section .collection__details a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    @media only screen and (max-width: 850px) {
      .collection__section {
        flex-direction: column;
        align-items: center;
        width: 90vw;
      }

      .collection__section img {
        margin-top: 0.8em;
      }

      .collection__section .collection__details {
        align-items: center;
        margin: 0;
        margin-top: 1em;
      }
    }
  </style>
  <div class="collection__section">
    <img class="collection__poster" src="../../images/Avengers_Endgame_poster_035_Textless.jpg" />
    <div class="collection__details">
        <a id="link" href="../../pages/collection-details/index.html"><h1 class="collection__title">SOME TITLE</h1></a>
        <h1 class="collection__description">Whatever description for collection</h1>
    </div>
  </div>
`;

class CollectionComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('.collection__title').innerHTML =
      this.getAttribute('collection-name');
    this.shadowRoot.querySelector('.collection__description').innerHTML =
      this.getAttribute('collection-text');
    this.shadowRoot.querySelector('.collection__poster').src =
      this.getAttribute('img-source');
    this.shadowRoot.querySelector('#link').href =
      this.getAttribute('collection-link');
  }

  static get observedAttributes() {
    return [
      'collection-name',
      'collection-text',
      'img-source',
      'collection-link',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'collection-name') {
      this.shadowRoot.querySelector('.collection__title').innerHTML = newValue;
    } else if (name === 'collection-text') {
      this.shadowRoot.querySelector('.collection__description').innerHTML =
        newValue;
    } else if (name === 'img-source') {
      this.shadowRoot.querySelector('.collection__poster').src = newValue;
    } else if (name === 'collection-link') {
      this.shadowRoot.querySelector('#link').href = newValue;
    }
  }
}

window.customElements.define('collection-component', CollectionComponent);
