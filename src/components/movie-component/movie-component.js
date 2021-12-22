const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
      @import "../../style.css"
  </style>
  <div class="movie">
    <div class="opacity">
      <div class="info">
        <span class="rating-stars">
          <span class="fa fa-star checked">
          </span>
          <span class="fa fa-star checked">
          </span>
          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
        </span>
        <h4 class="movie-title">AVENGERS: End Game</h4>
        <h5 class="movie-description">Action | 120min | 2021</h5>
        <button class="add-collection-button">+ MY COLLECTION</button>
      </div>
      <div class="watched-div">
        <img class="watched-button" src="../../images/watched-button.png">
      </div>
    </div>
</div>
`

class MovieComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  markWatched() {
    const watchedTick = this.shadowRoot.querySelector('.watched-button');
    if (watchedTick.getAttribute('src') === '../../images/watched-button.png') {
      watchedTick.setAttribute('src', '../../images/watched-button-green.png');
    } else {
      watchedTick.setAttribute('src', '../../images/watched-button.png');
    }
  }

  addToCollection() {
    const addCollectionBut = this.shadowRoot.querySelector(
      '.add-collection-button'
    );
    addCollectionBut.classList.toggle('added-movie');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('.watched-button')
      .addEventListener('click', () => this.markWatched());
    this.shadowRoot
      .querySelector('.add-collection-button')
      .addEventListener('click', () => this.addToCollection());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.watched-button').removeEventListener();
    this.shadowRoot
      .querySelector('.add-collection-button')
      .removeEventListener();
  }
}

window.customElements.define('movie-component', MovieComponent);
