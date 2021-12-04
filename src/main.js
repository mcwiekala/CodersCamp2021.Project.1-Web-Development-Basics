document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;


// DATA FROM 250 BEST MOVIES
fetch("https://imdb-api.com/en/API/Top250Movies/k_yju1poqs/")
    .then(result => result.json())
    .then(({items}) => {                // <---- items destructurized from data
        for (item of items.slice(10, 20)) {
            console.log(item.title, item.year, item.id)
        }
    })



// DATA FROM SINGLE MOVIE
fetch("https://imdb-api.com/en/API/Title/k_yju1poqs/tt0068646")
    .then(result => result.json())
    .then(data => {
        console.log(`${data.title}
${data.year}
${data.image}
${data.id}`)
    })
    