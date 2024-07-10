const API_KEY = process.env.REACT_APP_API_KEY
const base_url = `/discover/movie?api_key=${API_KEY}&with_genres`

const requests = {
    fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${base_url}=28`,
    fetchComedyMovies: `${base_url}=35`,
    fetchHorrorMovies: `${base_url}=27`,
    fetchRomanceMovies: `${base_url}=10749`,
    fetchDocumentryMovies: `${base_url}=99`,
}

export default requests