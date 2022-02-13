// const API_URL = 'https://starwars.egghead.training/';
const API_URL = 'https://json-server--3000.local.webcontainer.io/comments/';
// const url = 'https://json-server--3000.local.webcontainer.io/comments';

fetch(API_URL)
  .then((r) => r.json())
  .then(
    (json) =>
      (document.getElementById('output').innerHTML = JSON.stringify(
        json,
        null,
        2
      ))
  );

// const output = document.getElementById('output');
// output.innerText = 'loading...';

// const responsePromise = fetch(API_URL + 'films');
// responsePromise.then(
//   //onsuccess
//   (response) => {
//     response.json().then((films) => {
//       output.innerText = getFilmTitles(films);
//     });
//   },
//   //onrejected
//   (reason) => {
//     console.warn(reason);
//     output.innerText = 'error :(';
//   }
// );

// function getFilmTitles(films) {
//   return films
//     .sort((a, b) => a.episode_id - b.episode_id)
//     .map((film) => `${film.episode_id}. ${film.title}`)
//     .join('\n');
// }
