/* eslint-disable no-unused-vars */
import axios from 'axios';
import sheet from './style.css';
import './components/header/header.css';
import './components/footer/footer.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const apiKey = '46e8c41c';
const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

const moviesId = [
  'tt0816692',
  'tt0103064',
  'tt1675434',
  'tt0910970',
  'tt4633694',
  'tt1675434',
  'tt0078748',
  'tt1446714',
  'tt3896198',
  'tt1160419',
];

moviesId.forEach(async (movieId) => {
  const response = await instance.get(`?i=${movieId}&apikey=${apiKey}`);
  console.log(response.data);
});

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
