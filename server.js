const express = require('express');
const app = express();
const port = 3100;

app.use(express.json());

let movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 },
  { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Movie API');
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});

app.get(`/movies/title/:title`, (req, res) => {
  const movie = movies.find(m => m.title.toLowerCase() === req.params.title.toLowerCase());
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
});

app.post('/movies', (req, res) => {
  const { title, director, year } = req.body || {};
  if (!title || !director || !year) {
    return res.status(400).send('All fields are required');
  }
  const newMovie = {
    id: movies.length + 1,
    title,
    director,
    year
  };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

let directors = [
  { id: 1, name: 'Christopher Nolan' },
  { id: 2, name: 'Lana Wachowski' },
  { id: 3, name: 'Lilly Wachowski' }
];

app.put('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const moviesIndex = directors.findIndex(d => d.id === id);
    if (moviesIndex === -1) return res.status(404).send('Director not found');

    const {title, director, year} = req.body || {};
    const updatedDirector = { id, title, director, year };
    movies[moviesIndex] = updatedDirector;
    res.json(updatedDirector);
});

app.get('/directors', (req, res) => {
    res.json(directors);
});

app.get('/directors/:id', (req, res) => {
    const director = directors.find(d => d.id === parseInt(req.params.id));
    if (!director) return res.status(404).send('Director not found');
    res.json(director);
});

app.post('/directors', (req, res) => {
    const { name } = req.body || {};
    if (!name) {
        return res.status(400).send('Name is required');
    }
    const newDirector = {
        id: directors.length + 1,
        name
    };
    directors.push(newDirector);
    res.status(201).json(newDirector);
});

app.put('/directors/:id', (req, res) => {
    const id = Number(req.params.id);
    const moviesIndex = directors.findIndex(d => d.id === id);
    if (moviesIndex === -1) return res.status(404).send('Director not found');

    const { name } = req.body || {};
    if (!name) {
        return res.status(400).send('Name is required');
    }

    directors[moviesIndex].name = name;
    res.json(directors[moviesIndex]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
