const renderCards = require("./renderCards");
const axios = require("axios");


const fetchMovies = async () => {
    try {
        const movies = await axios.get("http://localhost:3000/peliculas")
        renderCards(movies.data);
    }
    catch(err) {
    console.log(err.message)
    }

}


fetchMovies()

