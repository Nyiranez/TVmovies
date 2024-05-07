import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './component/header'
import { Home } from './pages/home'
import { Explore } from './pages/explore'
import { Genre } from './pages/genre'
import { News } from './news'
import { Movies } from './pages/movies'
import { Tvmovies } from './pages/tvmovies'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="//explore" element={<Explore/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvmovies" element={<Tvmovies/>}/>
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
