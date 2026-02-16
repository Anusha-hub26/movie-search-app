const movies = [
  {
    title: "Avatar",
    year: "2009",
    image: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"
  },
  {
    title: "Titanic",
    year: "1997",
    image: "pic2.jpg"
  },
  {
    title: "Inception",
    year: "2010",
    image: "pic3.jpg"
  },
  {
    title: "Interstellar",
    year: "2014",
    image: "pici.jpg"
  }
];

const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";

  if (filteredMovies.length === 0) {
    movieList.innerHTML = "<p style='color:white'>Movie not found!</p>";
    return;
  }

  filteredMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.image}">
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
    `;

    movieList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchText)
  );

  displayMovies(filtered);
});

displayMovies(movies);

