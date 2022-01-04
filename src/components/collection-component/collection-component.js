const template = document.createElement('template')
template.innerHTML = `
<style>
      @import "./collections.css"
  </style>
  <div class="collection__section">
    <img class="collection__poster" src="../../images/Avengers_Endgame_poster_035_Textless.jpg" />
    <div class="collection__details">
        <a id="link" href="../../pages/collection-details/index.html"><h1 class="collection__title">SOME TITLE</h1></a>
        <h1 class="collection__description">Whatever description for collection</h1>
    </div>
  </div>
`


class CollectionComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('.collection__title').innerHTML = this.getAttribute('collection-name')
    this.shadowRoot.querySelector('.collection__description').innerHTML = this.getAttribute('collection-text')
    this.shadowRoot.querySelector('.collection__poster').src = this.getAttribute('img-source')
    this.shadowRoot.querySelector('#link').href = this.getAttribute('collection-link')
  }

  static get observedAttributes() {
    return ['collection-name', 'collection-text', 'img-source', 'collection-link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'collection-name') {
      this.shadowRoot.querySelector('.collection__title').innerHTML = newValue
    } else if (name === 'collection-text') {
      this.shadowRoot.querySelector('.collection__description').innerHTML = newValue
    } else if (name === 'img-source') {
      this.shadowRoot.querySelector('.collection__poster').src = newValue
    } else if (name === 'collection-link') {
      this.shadowRoot.querySelector('#link').href = newValue
    }
  }
}

window.customElements.define('collection-component', CollectionComponent)