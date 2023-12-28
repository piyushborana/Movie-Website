const api_key= '1abd55cc3c6e2fabe79c18703d22ed1f';

/* All the URLs below can be found in the documentation of the TMDB API (here: https://www.themoviedb.org/documentation/api/discover) (& here: https://developers.themoviedb.org/3/search/search-movies) */

const base_url= 'https://developers.themoviedb.org/3';

/* Getting the movies by popularity (refer documentation link mentioned above) */
const api_url= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1abd55cc3c6e2fabe79c18703d22ed1f';

const search_URL= 'https://api.themoviedb.org/3/search/movie?api_key='+ api_key +'&language=en-US&query=';

image_url= 'https://image.tmdb.org/t/p/w500'

/* Calling the getMovies function */
getMoviesData(api_url);

/* Creating getMovies() function to get movies data from the API */
function getMoviesData(url){

    // Using JS fetch() function to fetch data from the API
    // fetching the data from the url & then convert the result into json format & then store it in the data variable.
    fetch(url).then(res => res.json() ).then(data =>{

        // VERY IMPORTANT HERE.
        // HERE WE ARE DISPLAYING ALL THE DATA WE GET IN THE CONSOLE & THEN USING ONLY THE PARAMETERS WE REQUIRE.
        console.log(data);

        // calling the showMovies function to display movies.
        // results is an array of movies we get in the console. 
        showMovies(data.results)
    })

}

const main= document.getElementById('main')

/* Function to display HTML result */
function showMovies(data){

    /* var globalVariable={
        x: data.id
    }; */


    // Initialising the innerHTML of main as null
    main.innerHTML= '';

    // for each movie in the movie array, we want to display it in the form of cards
    
    // map() creates a new array for every array element
    // map() calls a function once for each element in an array
    // map() does not execute the function for empty elements
    // map() does not change the original array

    data.map(data =>{

        // Creating a div & assigning the div a name= 'movieDiv'
        const movieDiv= document.createElement('div');

        // Adding movie class to movieDiv so as to add css to our movie cards
        movieDiv.classList.add('movie');

        /* console.log(data.id) */

        // All the links in the HTML div can be obtained by checking the console of the browser
        movieDiv.innerHTML +=`
            <img src="${image_url+ data.poster_path}" alt="...">

            <div class="top-right" style="background-color: rgb(252, 227, 0); padding: 3px 10px; color: black; border-radius: 5px; font-weight: bold; font-family:'Times New Roman', Times, serif">
                    ${data.vote_average}
            </div>

            <div class="top-left">
                <a href="/review?id=${data.id}">
                    <button type="button" class="btn btn-primary btn-sm"'>Review</button>
                </a>
            </div>

            <div class="movie-info">
                <h5>${data.title}</h5>
            </div>

        `
        main.appendChild(movieDiv)
    })
}



const searchMovie= document.querySelector('.searchMovie')

// Creating the search functionality
searchMovie.addEventListener('submit', (event)=>{

    // preventing the default submission of the form
    event.preventDefault();

    let searchText= document.getElementById('searchText').value;


    /* const searchTerm= searchText.value; */

    if (searchText) {
        getMoviesData(search_URL+ searchText)
    }

    else{
        getMoviesData(api_url)
    }
})


/* function review(){

    getMoviesData(api_url+ ' ')

    const movieDetails= 'https://api.themoviedb.org/3/movie/634649?api_key=1abd55cc3c6e2fabe79c18703d22ed1f&language=en-US';

    getMoviesData(movieDetails);

    function getMoviesData(url){

        fetch(url).then(res => res.json() ).then(movieDetails_in_json =>{

            console.log(movieDetails_in_json);

            showMovies(movieDetails_in_json)
        })

    }

    const main= document.getElementById('main')


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


} */