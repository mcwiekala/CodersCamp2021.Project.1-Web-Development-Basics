/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import sheet from '../../style.css';

import MovieComponent from '../../components/movie-component/movie-component';
import '../../components/header/header.css';
import '../../components/footer/footer.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const moviesSection = document.querySelector('.movies-section');
const apiKey = '46e8c41c';
const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

const moviesId = [
  'tt1243957',
  'tt0120338',
  'tt11867884',
  'tt2452244',
  // 'tt7453044',
  // 'tt2151010',
  // 'tt0376541',
  // 'tt0116209',
  // 'tt0117951',
  // 'tt0127536',
  // 'tt0109831',
  // 'tt0085859',
  // 'tt0082158',
  // 'tt0119164',
  // 'tt10370710',
  // 'tt0067372',
  // 'tt14039582',
  // 'tt6817944',
  // 'tt8633462',
  // 'tt11271038',
  // 'tt8430054',
];
const movies = [];
moviesId.forEach(async (movieId) => {
  const {
    data,
    data: { Title, Runtime, Year, Genre, Poster },
  } = await instance.get(`?i=${movieId}&apikey=${apiKey}`);
  const movie = new MovieComponent(
    movieId,
    Title,
    Runtime,
    Year,
    Genre,
    Poster
  );
  moviesSection.appendChild(movie);
  movies.push(data);
  localStorage.setItem('Films', JSON.stringify(movies));
});
