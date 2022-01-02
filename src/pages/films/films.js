import axios from 'axios';
import MovieComponent from '../../components/movie-component/movie-component';

const moviesSection = document.querySelector('.movies-section')
const apiKey = '46e8c41c';
const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

const moviesId = [
  'tt0816692',
  // 'tt0103064',
  // 'tt1675434',
  // 'tt0910970',
  // 'tt4633694',
  // 'tt0133093',
  // 'tt0078748',
  // 'tt1446714',
  // 'tt3896198',
  // 'tt1160419',
];

moviesId.forEach(async (movieId) => {
  const { data: { Title, Runtime, Year, Genre, Poster } } = await instance.get(`?i=${movieId}&apikey=${apiKey}`);
  moviesSection.appendChild(new MovieComponent(Title, Runtime, Year, Genre.split(',')[0], Poster));
});
