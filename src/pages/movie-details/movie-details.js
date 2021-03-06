import '../../components/header/header.css';
import '../../components/footer/footer.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import axios from "axios";

const apiKey = '46e8c41c';
const instance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
});

const setDetailsData = async() => {
  const {
    data: { Title, Runtime, Year, Genre, Poster, Plot, Ratings },
  } = await instance.get(`?i=${sessionStorage.movieId}&apikey=${apiKey}`); ;
  document.querySelector('.movie-detail__title').innerText = Title;
  document.querySelector('.movie-detail__image').src = Poster;
  document.querySelector('.movie-detail__info').innerText = `${Year} | ${Runtime} | ${Genre.split(',')[0]}`;
  document.querySelector('.movie-detail__description').innerText = Plot;
  document.querySelector('.movie-detail__imdb-rate').innerText = Ratings[0].Value;
  document.querySelector('.movie-detail__tomatoes-rate').innerText = Ratings[1].Value;
  document.querySelector('.movie-detail__metacritic-rate').innerText = Ratings[2].Value;
}
setDetailsData();
