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
  constructor(title, runtime, year, genre, poster, id) {
    super();

    this.id = id;
    setComponentData(title, runtime, year, genre, poster);
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
      '.add-collection-button',
    );
    addCollectionBut.classList.toggle('added-movie');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('.watched-button')
      .addEventListener('click', () => this.markWatched());

    this.shadowRoot
      .querySelector('.movie')
      .addEventListener('click', () => {
        window.location.href = `${window.location.origin}/CodersCamp2021.Project.Web-Development-Basics/pages/movie-details/`; 
        localStorage.setItem('movieId', this.id)
      }); 
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.watched-button').removeEventListener();
    this.shadowRoot.querySelector('.movie').removeEventListener();
  }

}

window.customElements.define('movie-component', MovieComponent);
