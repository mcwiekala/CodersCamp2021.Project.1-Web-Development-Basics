class MovieComponent2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
        <div class="movie">
        <div class="opacity">
        <div class="info">
        <div class="rating-stars">
        <span class="fa fa-star checked">
        </span>
        <span class="fa fa-star checked">
        </span>
        <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></div>
        <h4 class="movie-title">AVENGERS: End Game</h4><h5 class="movie-description">Action | 120min | 2021</h5>
        <button class="add-collection-button">+ MY COLLECTION</button></div>
        <div class="watched-div"><img class="watched-button" src="../../images/watched-button.png">
        </div></div></div></div>
      `;
  }
}
customElements.define('movie-component-2', MovieComponent2);

export default MovieComponent2;
