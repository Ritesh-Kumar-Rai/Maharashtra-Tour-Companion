// Home.jsx for as index file

import SearchContainer from '../components/SearchContainer'
import ExploreCategories from '../components/ExploreCategories';
import EmblaCarousel from '../components/emblaCarousel/EmblaCarousel';


const Home = () => {

    const OPTIONS = { dragFree: true, loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <div className="banner shadow-2xl">
                <img src="https://images.unsplash.com/photo-1744522509591-59ba4adeb658?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="maharashtra banner image" />
                <div className='w-full h-full flex flex-col justify-center items-center backdrop-blur-xs hover:backdrop-blur-none transition-all duration-300 z-1'>
                    <h1 className="text-2xl md:text-7xl font-bold mb-4 text-white">Discover Maharashtra</h1>
                    <p className="text-lg mb-6 text-amber-500">A journey of culture, safety & comfort</p>
                    <button className="bg-[#F9C74F] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 active:bg-yellow-500">
                        Start Exploring
                    </button>
                </div>
            </div>
            {/* <h1 className='text-4xl text-center text-amber-700'>Lorem ipsum dolor sit.</h1> */}
            <hr className='my-10 border-gray-200 dark:border-gray-900' />
            <SearchContainer />
            <ExploreCategories />
            <section className='my-10 py-10 px-1 md:px-16 bg-white dark:bg-gray-900 rounded-2xl'>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-500 dark:text-amber-400">Popular Places</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
        </>
    )
};

export default Home;
