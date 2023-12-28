// Getting the search URL starting from ?
const queryString = window.location.search;

// Breaking (parsing) the queryString into parts, so that each data can be retreived
const urlParams = new URLSearchParams(queryString);

// Getting the value of 'id' in the url 
const movieID = urlParams.get('id')

image_url= 'https://image.tmdb.org/t/p/w500'

/* const movieID= globalVariable.x */

const movieDetails= 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key=1abd55cc3c6e2fabe79c18703d22ed1f&language=en-US';

getMoviesData(movieDetails);

function getMoviesData(url){

    fetch(url).then(res => res.json() ).then(movieDetails_in_json =>{

        console.log(movieDetails_in_json);

        showMovies(movieDetails_in_json)
    })

}

main= document.getElementById('main')


function showMovies(data){

    main.innerHTML= '';

    const movieDiv= document.createElement('div');

    console.log(Object.values(data.genres[0])[1])

    movieDiv.innerHTML +=`
        <div class="result-container ">

            <div class="d-flex flex-wrap justify-content-around">

                <div class="movie-poster">
                    <img src="${image_url+ data.poster_path}" alt="...">
                </div>

                <div class="movie-info">

                    <h3 class="movie-title">${data.title}</h3>

                    <ul class="movie-misc-info">

                        <li class="released"><b>Released: </b>${data.release_date}</li>

                        <br>

                        <li class="rated"><b>Ratings: </b>${data.vote_average}</li>

                        <br>

                        <p class="genre">
                            <b>Genre: </b>${Object.values(data.genres[0])[1]}
                        </p>

                    </ul>


                    <p class="budget">
                        <b><i class="bi bi-cash-coin"></i> Budget: </b>${data.budget} $
                    </p>
                    
                    <p class="runtime">
                        <b><i class="bi bi-hourglass-split"></i> Run Time: </b>${data.runtime} Min.
                    </p>

                    <p class="plot">
                        <b><i class="bi bi-clock-history"></i> Plot: </b>${data.overview}
                    </p>

                    <p class="language">
                        <b><i class="bi bi-translate"></i> Original Language: </b>${Object.values(data.spoken_languages[0])[0]}
                    </p>

                    <p class="production">
                        <b><i class="bi bi-building"></i> Production Company: </b>${Object.values(data.production_companies[0])[2]}
                    </p>
                    
                </div>

            </div>
        </div>

    `
    main.appendChild(movieDiv)
}
