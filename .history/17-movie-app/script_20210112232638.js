const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f2a4ae1cd84ba3665dbbbb41b89ff78&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0f2a4ae1cd84ba3665dbbbb41b89ff78&page=1&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}
function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <div class="movie">
      <img
        src=`${IMG_PATH+poster_path}`
        alt="">
      <div class="movie-info">
        <h3>Movie Title</h3>
        <span class="green">9.8</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, excepturi dicta! Dolores ut facere hic
        expedita ea? Veniam, est voluptatum.
      </div>
    </div>
    `;
  });
}

// Get initial movies
getMovies(API_URL);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
