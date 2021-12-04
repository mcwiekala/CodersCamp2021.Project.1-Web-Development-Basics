document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

fetch("https://imdb-api.com/en/API/Top250Movies/k_yju1poqs/")
    .then(result => result.json())
    .then(data => console.log(data.items[0]))


fetch("https://imdb-api.com/en/API/Title/k_yju1poqs/tt0068646")
    .then(result => result.json())
    .then(data => {
        console.log(`${data.title}
${data.year}
${data.image}
${data.id}`)
    })
    