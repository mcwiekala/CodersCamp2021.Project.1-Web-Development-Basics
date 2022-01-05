/* eslint-disable no-unused-vars, no-restricted-syntax, no-loop-func, no-await-in-loop */
import axios from 'axios';
import sheet from './style.css';
import './components/header/header.css';
import './components/footer/footer.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import {
  setBest2021,
  setBestBritish,
  setBestRomantic,
} from './components/collection-component/load-data';

const best2021 = 'LS_BEST_2021';
const bestBritish = 'LS_BEST_BRIT';
const bestRomantic = 'LS_BEST_ROM';

const apiKey = '46e8c41c';
const imdbApiClient = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

if (!localStorage.moviesWatched) {
  localStorage.moviesWatched = [];
}

const romanticWeekendMoviesId = [
  'tt1243957',
  'tt0120338',
  'tt11867884',
  'tt2452244',
  'tt7453044',
  'tt2151010',
  'tt0376541',
];

const bestBritishMoviesId = [
  'tt0116209',
  'tt0117951',
  'tt0127536',
  'tt0109831',
  'tt0085859',
  'tt0082158',
  'tt0119164',
];

const bestOf2021MoviesId = [
  'tt10370710',
  'tt0067372',
  'tt14039582',
  'tt6817944',
  'tt8633462',
  'tt11271038',
  'tt8430054',
];

async function checkCollectionLength(collection) {
  let totalLength = 0;
  for (const movieId of collection) {
    const runtimeAsText = await imdbApiClient
      .get(`?i=${movieId}&apikey=${apiKey}`)
      .then((response) => response.data.Runtime);
    const runtime = parseInt(runtimeAsText.split(' ')[0], 10);
    totalLength += runtime;
  }
  return totalLength;
}

async function checkMovieTitle(collection) {
  const movieTitles = [];
  for (const movieId of collection) {
    const movieTitle = await imdbApiClient
      .get(`?i=${movieId}&apikey=${apiKey}`)
      .then((response) => response.data.Title);
    movieTitles.push(movieTitle);
  }
  return movieTitles;
}

async function romanticWeekendMoviesCollection() {
  const romanticWeekendCollection = {
    collectionName: 'Romantic Weekend',
    collectionDescription:
      'Everyone loves love stories. Whether the ending of a romantic movie is happy or sad, the most human stories are those in which we open our hearts and give a piece of them to another person. Here is a collection of the most popular romantic movies that are sure to touch the hearts of all viewers.',
    movieids: romanticWeekendMoviesId,
    collectionImage: 'images/romantic_weekend_collection.jpg',
    totalLengthInMinutes: await checkCollectionLength(romanticWeekendMoviesId),
    movieTitles: await checkMovieTitle(romanticWeekendMoviesId),
  };
  if (localStorage.getItem(bestRomantic)) {
    localStorage.removeItem(bestRomantic);
  }
  localStorage.setItem(bestRomantic, JSON.stringify(romanticWeekendCollection));
  setBestRomantic();
  return romanticWeekendCollection;
}
setTimeout(romanticWeekendMoviesCollection, 0);

async function bestBritishMoviesCollection() {
  const bestBritishCollection = {
    collectionName: 'Best British Movies',
    collectionDescription:
      "This special collection of British films proves that English cinema deserves special attention. The best dramas and, of course, exceptionally disarming comedies - you'll find it all in one place now!",
    movieids: bestBritishMoviesId,
    collectionImage: 'images/best_british_collection.jpg',
    totalLengthInMinutes: await checkCollectionLength(bestBritishMoviesId),
    movieTitles: await checkMovieTitle(bestBritishMoviesId),
  };
  if (localStorage.getItem(bestBritish)) {
    localStorage.removeItem(bestBritish);
  }
  localStorage.setItem(bestBritish, JSON.stringify(bestBritishCollection));
  setBestBritish();
  return bestBritishCollection;
}
setTimeout(bestBritishMoviesCollection, 0);

async function bestOf2021MoviesCollection() {
  const bestOf2021Collection = {
    collectionName: 'Best of 2021',
    collectionDescription:
      'The year 2021 is already over, but it surprised with many interesting premieres. We have selected the best and most popular movies and series that premiered this year.Among them there are  comedies, thrillers and romantic movies.',
    movieids: bestOf2021MoviesId,
    collectionImage: 'images/best_of_2021_collection.jpg',
    totalLengthInMinutes: await checkCollectionLength(bestOf2021MoviesId),
    movieTitles: await checkMovieTitle(bestOf2021MoviesId),
  };
  if (localStorage.getItem(best2021)) {
    localStorage.removeItem(best2021);
  }
  localStorage.setItem(best2021, JSON.stringify(bestOf2021Collection));
  setBest2021();
}
setTimeout(bestOf2021MoviesCollection, 0);
