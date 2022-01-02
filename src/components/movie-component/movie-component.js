const template = document.createElement('template');
const setComponentData = (id, title, runtime, year, genre, poster) => {
  template.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
      @import "../../style.css"
  </style>
  <div id="${id}" class="movie">
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
    setComponentData(id, title, runtime, year, genre, poster);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // localStorage.setItem(id, runtime);

    let moviesWatched = [];
    console.log(localStorage.moviesWatched);
    if (localStorage.moviesWatched) {
      console.log(`zawiera: ${localStorage.moviesWatched}`);
      moviesWatched = JSON.parse(localStorage.moviesWatched);
    }
    if (!moviesWatched.includes(id)) {
      moviesWatched.push(id);
    }
    localStorage.moviesWatched = JSON.stringify(moviesWatched);
  }

  toggleWatched(element) {
    this.watched = !this.watched;
    const watchedTick = this.shadowRoot.querySelector('.watched-button');
    this.checkId(element);
    if (this.watched) {
      watchedTick.setAttribute('src', '../../images/watched-button-green.png');
    } else {
      watchedTick.setAttribute('src', '../../images/watched-button.png');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkId() {
    console.log(this.id);
    // alert(this.id);
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
