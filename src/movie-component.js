// VARIABLES
const body = document.body;


// FUNCTIONS
function markWatched() {
    let watchedTick = document.querySelector('.watched-button');
    if (watchedTick.getAttribute('src') === '../img/watched-button.png') {
       watchedTick.setAttribute('src', '../img/watched-button-green.png');
    } else {
        watchedTick.setAttribute('src', '../img/watched-button.png');
    };
}

function addToCollection() {
    let addCollectionBut = document.querySelector('.add-collection-button');
    addCollectionBut.classList.toggle('added-movie');
}



// CREATE COMPONENT CONTAINER
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
    ratingStars.innerHTML = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>`
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
    watchedButton.setAttribute("src", "../img/watched-button.png");
    watchedDiv.appendChild(watchedButton); 
opacityDiv.appendChild(watchedDiv);

body.appendChild(movieDiv);


// EVENT LISTENERS
let watchedTick = document.querySelector('.watched-button');
watchedTick.addEventListener('click', markWatched);

let addCollectionBut = document.querySelector('.add-collection-button');
addCollectionBut.addEventListener('click', addToCollection);