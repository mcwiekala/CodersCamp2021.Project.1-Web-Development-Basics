const template = document.createElement('template')
template.innerHTML = `
<style>
      @import "../../style.css"
  </style>
  <div class="section collection-section">
    <a id="link1" href="../../pages/collection-details/index.html"><img class="collection-poster" src="../../images/Avengers_Endgame_poster_035_Textless.jpg" /></a>
    <div class="collection-details">
        <a id="link2" href="../../pages/collection-details/index.html"><h1 class="collection-title">SOME TITLE</h1></a>
        <h1 class="collection-description">Whatever description for collection</h1>
    </div>
  </div>
`


class CollectionComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('.collection-title').innerHTML = this.getAttribute('collection-name')
    this.shadowRoot.querySelector('.collection-description').innerHTML = this.getAttribute('collection-text')
    this.shadowRoot.querySelector('.collection-poster').src = this.getAttribute('img-source')
    this.shadowRoot.querySelector('#link1').href = this.getAttribute('collection-link')
    this.shadowRoot.querySelector('#link2').href = this.getAttribute('collection-link')
  }
}

window.customElements.define('collection-component', CollectionComponent)