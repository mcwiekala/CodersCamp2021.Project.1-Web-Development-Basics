document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
  });

const moviesId = ["tt0816692", "tt0103064", "tt1675434", "tt0910970", "tt4633694", "tt1675434", "tt0078748", "tt1446714", "tt3896198", "tt1160419"];

moviesId.forEach(async movieId => {
    const response = await instance.get(`?i=${movieId}&apikey=46e8c41c`);
    console.log(response.data);
})