import React from 'react'
import { IoIosClose } from "react-icons/io";
import ModalForNavORMenuBars from './ModalForNavORMenuBars';
import { FaSearch } from "react-icons/fa";

const SearchContainer = () => {

    const [isGuestModalOpened, setIsGuestModalOpened] = React.useState(false);

    const handleGuestModal = () => {
        setIsGuestModalOpened(prev => !prev);
    };

    return (
        <div className="search-container my-5 w-full p-5">
            <div className="search-box w-full min-h-20 border-0 rounded-3xl grid grid-cols-12 p-2">
                {/* search-bar */}
                <div className='col-start-1 col-end-3 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    <label htmlFor="search-input" className='font-medium cursor-pointer my-2'>Where</label>
                    <input type="search" name="" className='w-full border-0 outline-0 focus:outline-slate-500 dark:focus:outline-amber-500 dark:text-white' placeholder='Search destinations' id="search-input" autoComplete='off' />
                </div>
                {/* check-in bar */}
                <div className='col-start-3 col-end-5 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    <label htmlFor="checkin-input" className='font-medium cursor-pointer my-2'>Check in</label>
                    <input type="date" name="" className='w-full border-0 focus:outline-slate-500 dark:focus:outline-amber-500 dark:text-white' placeholder='Search destinations' id="checkin-input" autoComplete='off' />
                </div>
                {/* check-out bar */}
                <div className='col-start-5 col-end-7 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    <label htmlFor="checkout-input" className='font-medium cursor-pointer my-2'>Check out</label>
                    <input type="date" name="" className='w-full border-0 focus:outline-slate-500 dark:focus:outline-amber-500 dark:text-white' placeholder='Search destinations' id="checkout-input" autoComplete='off' />
                </div>
                {/* add guests bar */}
                <div className='col-start-7 col-end-9 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    <label className='font-medium cursor-pointer my-2' onClick={handleGuestModal}>Who</label>
                    <div className='w-full flex items-center gap-0.5 relative'>
                        <input type="text" name="" className='w-[80%] border-0 outline-0 dark:text-white' placeholder='Add guests' id="guest-input" autoComplete='off' onClick={handleGuestModal} readOnly />
                        <IoIosClose className={`w-[20%] cursor-pointer bg-slate-300 dark:bg-slate-800 rounded-full transition-all active:scale-70`} size={28} />

                        {/* modal here */}
                        <ModalForNavORMenuBars style={`${isGuestModalOpened ? 'visible' : 'hidden'}`} closeModal={setIsGuestModalOpened} />
                    </div>
                </div>
                {/* category bar */}
                <div className='col-start-9 col-end-11 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    <label htmlFor='category-input' className='font-medium cursor-pointer my-2'>Category</label>
                    <select
                        name="Headline"
                        id="category-input"
                        className="mt-0.5 w-full rounded border-gray-200 shadow-sm sm:text-sm md:text-md py-1 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    >
                        <option value="">Please select place category</option>
                        <option value="beaches">Beaches</option>
                        <option value="nature&wildlife">Nature & Wildlife</option>
                        <option value="UNESCO-heritage-sites">UNESCO Heritage Sites</option>
                        <option value="hill-stations">Hill Stations</option>
                        <option value="aquatic-sports">Aquatic Sports</option>
                        <option value="unique-experiences">Unique Experiences</option>
                        <option value="lake-view-stays">Lake View Stays</option>
                        <option value="nature-stays">Nature Stays</option>
                        <option value="city-stays">City Stays</option>
                        <option value="caves">Caves</option>
                        <option value="temples">Temples</option>
                        <option value="forts">Forts</option>
                    </select>
                </div>
                <div className='col-start-11 col-end-13 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-center justify-center flex-col p-2 transition-all duration-200'>
                    <button type='button' className='w-auto flex items-center justify-between gap-2 rounded-md bg-amber-600 text-white px-3 py-1 active:scale-90 transition-transform duration-200'>Search <FaSearch /></button>
                </div>
            </div>
        </div>
    )
};

export default SearchContainer;