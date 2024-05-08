import axios from "axios";

/** base URL to make request to the movie database **/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3" 
});

/*  
 *  example:
 *  instance.get('foo-bar')
 *  is a GET request from the end point:
 *  "https://api.themoviedb.org/3/foo-bar"
 */ 

export default instance