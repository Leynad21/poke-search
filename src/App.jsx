import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      <div className=' flex flex-col items-center bg-blue-300 h-screen'>
        <div className='my-8'>
          <img className='w-[400px] sm:w-[600px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon-logo" />
        </div>
        <SearchBar />
      </div>
    </>
  )
}

export default App
