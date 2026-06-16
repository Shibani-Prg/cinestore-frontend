import React from 'react'
import Search from './Components/Search/Search'
import Buttons from './Components/SwitchButton/Buttons'
import Mood from './Components/Mood/Mood'
import Reviews from './Components/Reviews/Reviews'
import Headershow from './Components/Header/Headershow/Headershow'
import MovieRow from './Components/MovieRow/MovieRow'

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-black mt-30'>
          

      <div
        onClick={() => window.dispatchEvent(new Event("closeSearch"))}
      ></div>

      
      <div>
        <Headershow />
      </div>


      <div>
        <div className='mt-5 ml-5'>
          <Buttons />
        </div>

        <div>
          <MovieRow />
        </div>
        <div className='mt-10'>
          <Mood />
        </div>
        <div>
          <Reviews />
        </div>
      </div>

    </div >
  )
}

export default Home