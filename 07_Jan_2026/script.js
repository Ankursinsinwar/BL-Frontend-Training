const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const Saerch_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

    function display(data) {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = '<h3>No movies found.</h3>';
    return;
  }

  data.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-card');

    movieElement.innerHTML = `
      <div class="movie-inner">
        
        <div class="movie-front">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h4>${movie.title}</h4>
          <p>⭐ ${movie.vote_average}</p>
        </div>

        <div class="movie-back">
          <h4>${movie.title}</h4>
          <hr>
          <p><strong>Overview:</strong> <br> ${movie.overview}</p>
          <hr>
          <p><strong>Release:</strong> ${movie.release_date}</p>
          <hr>
          <p><strong>Popularity:</strong> ${movie.popularity}</p>
        </div>

      </div>
    `;

    movieElement.addEventListener('click', () => {
      movieElement.classList.toggle('flipped');
    });

    container.appendChild(movieElement);
  });
}


    async function fetchMovies(url) {
        try {
          const response = await fetch(url);
          const data = await response.json();
          display(data.results);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }

    // document.getElementById('search-button').addEventListener('click', () => {
    //   const query = document.getElementById('search-input').value.trim();
    //   if (query) {
    //     fetchMovies(`${Saerch_URL}${encodeURIComponent(query)}`);
    //   } else {
    //     fetchMovies(URL);
    //   }
    // });

    // fetchMovies(URL);

    const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();

  if (query.length > 0) {
    fetchMovies(`${Saerch_URL}${encodeURIComponent(query)}`);
  } else {
    fetchMovies(URL); // fallback when input is empty
  }
});

// initial load
fetchMovies(URL);
