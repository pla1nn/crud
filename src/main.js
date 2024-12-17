const API_URL = './movies.json';

async function fetchMovies() {
  fetch(API_URL)
    .then(response => response.json())
    .then(movies => {
      const table = document.getElementById('table').querySelector('tbody');
      table.innerHTML = movies
        .map(
          movie => `<tr>
        <td>${movie.title}</td>
        <td>${movie.genre}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
        <td>
            <button onclick="updateMovie(${movie.id})">Update</button>
            <button onclick="editMovie(${movie.id})">Edit</button>
            <button onclick="deleteMovie(${movie.id})">Delete</button>
        </td>
        </tr>`
        )
        .join('');
    });
}

const fetchButton = document.getElementById('button');
fetchButton.addEventListener('click', fetchMovies);

const form = document.getElementById('moviesForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const addNewMovie = {
    title: document.getElementById('title').value,
    genre: document.getElementById('genre').value,
    director: document.getElementById('director').value,
    year: document.getElementById('year').value,
  };
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(addNewMovie),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(fetchMovies);
});

async function deleteMovie(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  fetchMovies();
}
