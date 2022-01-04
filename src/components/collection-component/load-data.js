const collection1 = document.querySelector('#collection-1');
const collection2 = document.querySelector('#collection-2');
const collection3 = document.querySelector('#collection-3');

const best2021 = 'LS_BEST_2021';
const bestBritish = 'LS_BEST_BRIT';
const bestRomatic = 'LS_BEST_ROM';

let dataBest2021 = {};
let dataBestBritish = {};
let dataBestRomatic = {};

dataBest2021 = JSON.parse(localStorage.getItem(best2021));
dataBestBritish = JSON.parse(localStorage.getItem(bestBritish));
dataBestRomatic = JSON.parse(localStorage.getItem(bestRomatic));

collection1.setAttribute('collection-name', dataBest2021.collectionName);
collection1.setAttribute('collection-text', dataBest2021.collectionDescription);
collection1.setAttribute(
  'img-source',
  `../../../${dataBest2021.collectionImage}`
);
collection1.setAttribute(
  'collection-link',
  '../collection-details/?id=LS_BEST_2021'
);

collection2.setAttribute('collection-name', dataBestBritish.collectionName);
collection2.setAttribute(
  'collection-text',
  dataBestBritish.collectionDescription
);
collection2.setAttribute(
  'img-source',
  `../../../${dataBestBritish.collectionImage}`
);
collection2.setAttribute(
  'collection-link',
  '../collection-details/?id=LS_BEST_BRIT'
);

collection3.setAttribute('collection-name', dataBestRomatic.collectionName);
collection3.setAttribute(
  'collection-text',
  dataBestRomatic.collectionDescription
);
collection3.setAttribute(
  'img-source',
  `../../../${dataBestRomatic.collectionImage}`
);
collection3.setAttribute(
  'collection-link',
  '../collection-details/?id=LS_BEST_ROM'
);
