import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <h1 className='text-4xl text-amber-700'>Lorem ipsum dolor sit.</h1>
      <main className='h-screen dark:bg-gray-800 scroll-smooth'>
        <div className="banner"></div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 py-6 px-6 text-center text-sm">
        <div className="mb-2">Made with ❤️ by Ritesh – solving real problems</div>
        <div className='dark:text-amber-500 font-bold text-lg'>© {new Date().getFullYear()} Maharashtra Tourism Companion</div>
      </footer>

    </>
  )
}

export default App
