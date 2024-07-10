import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import requests from '../services/requests';
import '../style/Banner.css';

function Banner() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const randomIndex = Math.floor(Math.random() * request.data.results.length);
                setMovie(request.data.results[randomIndex]);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover",  // Use "cover" to cover the entire area
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        > 
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    {/* <button className="banner_button">Play</button> */}
                    {/* <button className="banner_button">My List</button> */}
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> 
            </div>
            <div className="banner_fade_bottom" />
        </header>
    );
}

export default Banner;