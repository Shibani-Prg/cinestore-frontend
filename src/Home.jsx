import React from 'react'
import Search from './Components/Search/Search'
import Buttons from './Components/SwitchButton/Buttons'
import Mood from './Components/Mood/Mood'
import Reviews from './Components/Reviews/Reviews'
import Headershow from './Components/Header/Headershow/Headershow'
import MovieRow from './Components/MovieRow/MovieRow'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-black mt-30'>

      {/* 🔥 SEO */}
      <Helmet>
        <title>Movora - Watch Trending Movies Online</title>
        <meta
          name="description"
          content="Watch trending Bollywood, Hollywood, South and animated movies on Movora. Discover movies by mood and explore top rated films."
        />
        <meta name="keywords" content="movies, bollywood movies, hollywood movies, trending movies, watch movies online" />
      </Helmet>

      {/* click outside search */}
      <div onClick={() => window.dispatchEvent(new Event("closeSearch"))}></div>

      {/* header */}
      <Headershow />

      {/* content */}
      <div>
        <div className='mt-5 ml-5'>
          <Buttons />
        </div>

        <MovieRow />

        <div className='mt-10'>
          <Mood />
        </div>

        <Reviews />
      </div>

    </div>
  )
}

export default Home