// HOME
const main = document.getElementById('main');
const movies = document.createElement('ul');
movies.classList.add('moviesDiv');
main.appendChild(movies);

fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((movie) => {
            const movieElement = document.createElement('li');
            movieElement.classList.add('movie');
            const baseUrl = 'https://image.tmdb.org/t/p/w500';
            const posterPath = movie.poster_path;
            const imgSrc = `${baseUrl}${posterPath}`;
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${imgSrc}" alt="${movie.title}" />
            `;

            movieElement.addEventListener('click', () => {
                window.location.href = `movie.html?id=${movie.id}`;
            });
            movies.appendChild(movieElement);
        });
    });
