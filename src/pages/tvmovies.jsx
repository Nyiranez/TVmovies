import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Tvmovies = () => {
    const [movies, setMovies] = useState([]);

    const handleFetch = () => {
        axios({
            method: "get",
            url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjMxNjBlODgwMjBjYWY3MGQ3M2JmMjY3OTU5MzdlYiIsInN1YiI6IjY2MzhkYTBiYWUzODQzMDEyNWNhMGFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghTcxND_H68zL0N8fLWY-JG7eAxotZ3t9lnsyFtpC0Y'
            },
        }).then((res) => {
            console.log("res.data", res.data);
            setMovies(res.data.results);
        }).catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className='flex flex-row flex-wrap gap-4 justify-center mt-16'>

            {movies.map(movie => (
                <div key={movie.id} >
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" style={{ width: "200px", height: "250px" }}></img>
                        <h2 className='text-white'>{movie.title}</h2>
                        <p className='text-white'>Release Date: {movie.release_date}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};
