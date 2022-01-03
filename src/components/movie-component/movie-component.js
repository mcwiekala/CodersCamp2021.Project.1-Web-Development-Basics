const template = document.createElement('template');
const setComponentData = (title, runtime, year, genre, poster) => {
  template.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
      @import "../../style.css"
  </style>
  <div class="movie">
    <img class="movie-image" src="${poster}"/>
    <div class="opacity">
      <div class="info">
        <span class="rating-stars">
          <span class="fa fa-star checked">
          </span>
          <span class="fa fa-star checked">
          </span>
          <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>
        </span>
        <h4 class="movie-title">${title}</h4>
        <h5 class="movie-description">${genre} | ${runtime} | ${year}</h5>
      </div>
      <div class="watched-div">
        <img class="watched-button" src="../../images/watched-button.png">
      </div>
    </div>
  </div>
`;
};

export default class MovieComponent extends HTMLElement {
  constructor(id, title, runtime, year, genre, poster) {
    super();
    this.watched = false;
    this.id = id;
    this.runtime = runtime;
    setComponentData(title, runtime, year, genre, poster);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.init();
  }

  init() {
    let moviesWatched = [];
    if (localStorage.moviesWatched) {
      moviesWatched = JSON.parse(localStorage.moviesWatched);
    }
    if (moviesWatched.includes(this.id)) {
      this.toggleWatched();
    }
    localStorage.moviesWatched = JSON.stringify(moviesWatched);
  }

  toggleWatched() {
    this.watched = !this.watched;
    const watchedTick = this.shadowRoot.querySelector('.watched-button');
    this.toggleLocalStorage();
    if (this.watched) {
      watchedTick.setAttribute('src', '../../images/watched-button-green.png');
    } else {
      watchedTick.setAttribute('src', '../../images/watched-button.png');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  toggleLocalStorage() {
    let moviesWatched = [];
    if (localStorage.moviesWatched) {
      moviesWatched = JSON.parse(localStorage.moviesWatched);
    }
    if (!moviesWatched.includes(this.id)) {
      console.log(`add: ${this.id}`);
      moviesWatched.push(this.id);
    } else {
      console.log(`remove: ${this.id}`);
      moviesWatched = moviesWatched.filter((f) => f !== this.id);
    }
    localStorage.moviesWatched = JSON.stringify(moviesWatched);
  }

  addToCollection() {
    const addCollectionBut = this.shadowRoot.querySelector(
      // eslint-disable-next-line comma-dangle
      '.add-collection-button'
    );
    addCollectionBut.classList.toggle('added-movie');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('.watched-button')
      .addEventListener('click', () => this.toggleWatched(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.watched-button').removeEventListener();
  }
}

window.customElements.define('movie-component', MovieComponent);
