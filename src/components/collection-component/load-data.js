import imageBest2021 from '../../images/best_of_2021_collection.jpg';
import imageBestBritish from '../../images/best_british_collection.jpg';
import imageRomantic from '../../images/romantic_weekend_collection.jpg';

const collection1 = document.querySelector('#collection-1');
const collection2 = document.querySelector('#collection-2');
const collection3 = document.querySelector('#collection-3');

const best2021 = 'LS_BEST_2021';
const bestBritish = 'LS_BEST_BRIT';
const bestRomatic = 'LS_BEST_ROM';

let dataBest2021 = {};
let dataBestBritish = {};
let dataBestRomatic = {};



const setBest2021 = () => {
  dataBest2021 = JSON.parse(localStorage.getItem(best2021));
  collection1.setAttribute('collection-name', dataBest2021.collectionName);
  collection1.setAttribute('collection-text', dataBest2021.collectionDescription);
  collection1.setAttribute('img-source', imageBest2021);
}

const setBestBritish = () => {
  dataBestBritish = JSON.parse(localStorage.getItem(bestBritish));
  collection2.setAttribute('collection-name', dataBestBritish.collectionName);
  collection2.setAttribute(
    'collection-text',
    dataBestBritish.collectionDescription
  );
  collection2.setAttribute('img-source', imageBestBritish);
}

const setBestRomantic = () => {
  dataBestRomatic = JSON.parse(localStorage.getItem(bestRomatic));
  collection3.setAttribute('collection-name', dataBestRomatic.collectionName);
  collection3.setAttribute(
    'collection-text',
    dataBestRomatic.collectionDescription
  );
  collection3.setAttribute('img-source', imageRomantic);
}

export { setBest2021, setBestBritish, setBestRomantic }
