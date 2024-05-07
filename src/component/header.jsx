import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import {Bazar} from '../assets/images/Capture2.png'
export const Header = () => {
    return (
        <div>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-row mt-8'>
                    {/* <img src={Bazar} alt=''></img> */}
                    <h1 className="text-white">Movies Bazar</h1>
                    
                </div>
                <div className='space-x-4 mt-8'>
                    <NavLink to="/" className="text-white">Home</NavLink>
                    <NavLink to="/explore" className="text-white">Explore</NavLink>
                    <NavLink to="/genre" className="text-white">Genre</NavLink>
                    <NavLink to="/news" className="text-white">News</NavLink>
                    <NavLink to="/movies" className="text-white">Movies</NavLink>
                    <NavLink to="/tvmovies" className="text-white">TV Shows</NavLink>
                </div>
                <Outlet/>

            </div>
        </div>
    )
}
