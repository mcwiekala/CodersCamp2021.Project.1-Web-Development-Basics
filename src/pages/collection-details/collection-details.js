import imageBest2021 from '../../images/best_of_2021_collection.jpg';
import imageBestBritish from '../../images/best_british_collection.jpg';
import imageRomantic from '../../images/romantic_weekend_collection.jpg';

window.onload = function () {
  const params = new URL(window.location).searchParams;
  const idName = params.get('id');
  const localData = JSON.parse(localStorage.getItem(idName));
  const moviesWatched = JSON.parse(localStorage.getItem('moviesWatched'));
  const movies = JSON.parse(localStorage.getItem('Films'));
  const moviesCollection = localData.movieids;
  const filteredArray = moviesWatched.filter((value) =>
    moviesCollection.includes(value)
  );

  const fimls = filteredArray
    .map((id) => movies.find((film) => film.imdbID === id))
    .filter((id) => id !== undefined);

  let times = 0;
  let titles = [];

  fimls.forEach((element) => {
    const time = element.Runtime.split(' ')[0];
    const title = element.Title;
    const parsTime = parseInt(time);
    times += parsTime;
    titles.push(title);
  });

  const timePercentages = parseInt(
    (times * 100) / localData.totalLengthInMinutes,
    10
  );

  function imgImpSearch() {
    if (localData.collectionImage === 'imageBest2021') {
      return imageBest2021;
    }
    if (localData.collectionImage === 'imageBestBritish') {
      return imageBestBritish;
    }
    if (localData.collectionImage === 'imageRomantic') {
      return imageRomantic;
    }
    return imageBest2021;
  }

  function movieList() {
    const numberOfListItems = titles.length;
    let listItem;
    let i;

    for (i = 0; i < numberOfListItems; ++i) {
      listItem = document.createElement('li');
      listItem.innerHTML = titles[i];
      document.querySelector('.collection__list_pos').appendChild(listItem);
    }
  }

  document.querySelector('.collection__progress_name').innerHTML =
    localData.collectionName;
  document.querySelector('.collection__image_src').src = imgImpSearch();
  document.querySelector(
    '.collection__progress_text'
  ).innerHTML = `Watching time: ${parseInt(times / 60, 10)} hours ${
    times % 60
  } minutes`;
  document.querySelector(
    '#collection__progress'
  ).style.width = `${timePercentages}%`;
  movieList();
};
