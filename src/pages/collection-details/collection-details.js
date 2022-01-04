import imageBest2021 from '../../images/best_of_2021_collection.jpg';
import imageBestBritish from '../../images/best_british_collection.jpg';
import imageRomantic from '../../images/romantic_weekend_collection.jpg';

window.onload = function () {
  const params = new URL(window.location).searchParams;
  const idName = params.get('id');
  const localData = JSON.parse(localStorage.getItem(idName));

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

  document.querySelector('.collection__progress_name').innerHTML =
    localData.collectionName;
  document.querySelector('.collection__image_src').src = imgImpSearch();
  document.querySelector('.collection__list_pos').innerHTML = imgImpSearch();
};
