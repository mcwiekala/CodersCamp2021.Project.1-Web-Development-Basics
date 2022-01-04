const collection1 = document.querySelector('#collection-1')
const collection2 = document.querySelector('#collection-2')
const collection3 = document.querySelector('#collection-3')


const bestOf2021MoviesCollection = {
    collectionName: 'Best of 2021',
    collectionDescription: 'Best movies of 2021',
    collectionImage: '../../images/Avengers_Endgame_poster_035_Textless.jpg',
  };
  
  const bestBritishMoviesCollection = {
    collectionName: 'Best British Movies',
    collectionDescription: 'Best british movies',
    collectionImage: '../../images/Avengers_Endgame_poster_035_Textless.jpg',
  };
  
  const romanticWeekendMoviesCollection = {
    collectionName: 'Romantic Weekend',
    collectionDescription: 'Movies for romantic weekend',
    collectionImage: '../../images/Avengers_Endgame_poster_035_Textless.jpg',
  };



collection1.setAttribute('collection-name', bestOf2021MoviesCollection.collectionName)
collection1.setAttribute('collection-text', bestOf2021MoviesCollection.collectionDescription)
collection1.setAttribute('img-source', bestOf2021MoviesCollection.collectionImage)

collection2.setAttribute('collection-name', bestBritishMoviesCollection.collectionName)
collection2.setAttribute('collection-text', bestBritishMoviesCollection.collectionDescription)
collection2.setAttribute('img-source', bestBritishMoviesCollection.collectionImage)

collection3.setAttribute('collection-name', romanticWeekendMoviesCollection.collectionName)
collection3.setAttribute('collection-text', romanticWeekendMoviesCollection.collectionDescription)
collection3.setAttribute('img-source', romanticWeekendMoviesCollection.collectionImage)