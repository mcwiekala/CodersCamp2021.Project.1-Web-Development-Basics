// APPEND STYLES
const templateStyle = document.createElement('template-style')
templateStyle.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        @import "../../style.css"
    </style>
`

// CREATE COMPONENT CONTAINER
const template = document.createElement('div');
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
    // CREATE OPACITY DIV FOR INFO SECTION
        const opacityDiv = document.createElement('div');
        opacityDiv.classList.add('opacity');
    movieDiv.appendChild(opacityDiv);
    // CREATE INFO ABOUT MOVIE SECTION
    const infoDiv = document.createElement('div'); 
    infoDiv.classList.add('info');
        // RATING STARS 
        const ratingStars = document.createElement('div');
        ratingStars.classList.add('rating-stars');
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('span');
                star.classList.add('fa', 'fa-star', 'checked');
                ratingStars.appendChild(star);
            }
        infoDiv.appendChild(ratingStars);
        // MOVIE TITLE
        const movieTitle = document.createElement('h4');
        movieTitle.classList.add('movie-title');
        movieTitle.innerText = 'AVENGERS: End Game'
        infoDiv.appendChild(movieTitle);
        // MOVIE DESCRIPTION
        const movieDescription = document.createElement('h5');
        movieDescription.classList.add('movie-description');
        movieDescription.innerHTML = `Action | 120min | 2021`; 
        infoDiv.appendChild(movieDescription);
        // ADD TO MY COLLECTION BUTTON
        const addCollectionButton = document.createElement('button');
        addCollectionButton.classList.add('add-collection-button');
        addCollectionButton.innerText = '+ MY COLLECTION'; 
        infoDiv.appendChild(addCollectionButton);
    opacityDiv.appendChild(infoDiv);
    // CREATE BUTTONS SECTION NEXT TO INFO ABOUT MOVIE 
    const watchedDiv = document.createElement('div');
    watchedDiv.classList.add('watched-div')
    // WATCHED BUTTON
        const watchedButton = document.createElement('img');
        watchedButton.classList.add('watched-button');
        watchedButton.setAttribute("src", "../../images/watched-button.png");
        watchedDiv.appendChild(watchedButton); 
    opacityDiv.appendChild(watchedDiv);

    template.appendChild(movieDiv);

class MovieComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(templateStyle)
        this.shadowRoot.appendChild(template) 
    }

    markWatched() {
        let watchedTick = this.shadowRoot.querySelector('.watched-button');
        if (watchedTick.getAttribute('src') === '../../images/watched-button.png') {
            watchedTick.setAttribute('src', '../../images/watched-button-green.png');
        } else {
            watchedTick.setAttribute('src', '../../images/watched-button.png');
    };
    }

    addToCollection() {
        let addCollectionBut = this.shadowRoot.querySelector('.add-collection-button');
        addCollectionBut.classList.toggle('added-movie');
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.watched-button').addEventListener('click', () => this.markWatched());
        this.shadowRoot.querySelector('.add-collection-button').addEventListener('click', () => this.addToCollection());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.watched-button').removeEventListener();
        this.shadowRoot.querySelector('.add-collection-button').removeEventListener();
    }

}

window.customElements.define('comp-movie', MovieComponent)