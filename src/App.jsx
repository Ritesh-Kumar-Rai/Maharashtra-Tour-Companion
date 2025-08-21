import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Notices from './pages/Notices';
import PageNotFound from './pages/PageNotFound';
import Explore from './pages/Explore'
import ExplorePage from './pages/ExplorePage'
import Search from './pages/Search'


function App() {

  return (
    <>
      <Header />
      <main className='min-h-screen p-4 dark:bg-gray-800 scroll-smooth'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/explore2' element={<ExplorePage />} />
          <Route path='/search' element={<Search />} />
          <Route path='/notices' element={<Notices />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 py-6 px-6 text-center text-sm">
        <div className="mb-2">Made with ❤️ by Ritesh – solving real problems</div>
        <div className='dark:text-amber-500 font-bold text-lg'>© {new Date().getFullYear()} Maharashtra Tourism Companion</div>
      </footer>

    </>
  )
}

export default App
