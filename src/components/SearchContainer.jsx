import React from 'react'
import { IoIosClose } from "react-icons/io";
import ModalForNavORMenuBars from './ModalForNavORMenuBars';
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

// Sub-components which will use in SearchContainer
const SearchBar = ({ id_for_input = "id_for_labelInput_Binding", labelName = 'Search Places', placeholderName = "" }) => { // will expect value and onChange as params
    return (
        <>
            <label htmlFor={id_for_input} className='font-medium cursor-pointer my-2'>{labelName}</label>
            <input type="search" name="" className='w-full border-0 focus:outline-slate-500 dark:focus:outline-amber-500 dark:text-white' placeholder={placeholderName} id={id_for_input} autoComplete='off' />
        </>
    );
};

const DateInput = ({ id_for_input = "id_for_labelInput_Binding", labelName = "Check in" }) => { // will expect value and onChange as params
    return (
        <>
            <label htmlFor={id_for_input} className='font-medium cursor-pointer my-2'>{labelName}</label>
            <input type="date" name="" className='w-full border-0 focus:outline-slate-500 dark:focus:outline-amber-500 dark:text-white' id={id_for_input} autoComplete='off' />
        </>
    );
};

// will expect value and onChange as params
const AddGuests = ({ handleGuestModal = () => { throw new ReferenceError("handleGuestModal() Expected as parameter but didn't got it!") }, isGuestModalOpened = false, setIsGuestModalOpened = () => { throw new ReferenceError("setIsGuestModalOpened() Expected as parameter but didn't got it!") } }) => {
    return (
        <>
            <label className='font-medium cursor-pointer my-2' onClick={handleGuestModal}>Who</label>
            <div className='w-full flex items-center justify-between gap-0.5 relative'>
                <input type="text" placeholder='Add guests' className='w-[80%] border-0 focus:outline-slate-500 dark:focus:outline-amber-500 dark:text-white' id="guest-input" autoComplete='off' onClick={handleGuestModal} readOnly />
                <IoIosClose className={`w-[20%] max-w-[49px] cursor-pointer bg-slate-300 dark:bg-slate-800 rounded-full transition-all active:scale-90`} size={28} />

                {/* modal here */}
                <ModalForNavORMenuBars style={`${isGuestModalOpened ? 'visible' : 'hidden'}`} closeModal={setIsGuestModalOpened} />
            </div>
        </>
    );
};

const CategorySelector = () => { // will expect value and onChange as params
    return (
        <>
            <label htmlFor='category-input' className='font-medium cursor-pointer my-2'>Category</label>
            <select
                name="Headline"
                id="category-input"
                className="mt-0.5 w-full rounded border-gray-200 sm:text-sm md:text-md py-1 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            >
                <option value="">Select place category</option>
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
        </>
    );
};


// Main Component
const SearchContainer = ({ isFilterRequired = false }) => {

    const [isGuestModalOpened, setIsGuestModalOpened] = React.useState(false);

    const handleGuestModal = () => {
        setIsGuestModalOpened(prev => !prev);
    };

    if (isFilterRequired) {
        return (
            <div className="search-container my-5 w-full p-5">
                <div className='w-full min-h-20 border-0 rounded-3xl flex items-center justify-between gap-2'>
                    {/* Search Bar */}
                    <div className='hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl flex items-start justify-center flex-col p-2 w-full'>
                        <SearchBar id_for_input='search-bar-input' labelName='Where' placeholderName='Search Places...' />
                    </div>
                    <div className='p-2'>
                        <button
                            type='button'
                            className='flex items-center justify-center gap-1 space-x-2 rounded-md px-3 h-8 text-sm font-bold border bg-white shadow-xs transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-gray-300 dark:bg-gray-800 dark:border-slate-500 dark:hover:bg-gray-700 dark:text-white dark:hover:text-gray-200'
                        >
                            <CiFilter fontSize={19} fontWeight={'bold'} /> {/* icon size controlled via class */}
                            Filters
                        </button>
                    </div>
                    <div className='p-2'>
                        <button
                            type='button'
                            className='flex items-center justify-center gap-1 space-x-2 rounded-md px-3 h-8 text-sm font-bold border bg-white shadow-xs transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-gray-300 dark:bg-gray-800 dark:border-slate-500 dark:hover:bg-gray-700 dark:text-white dark:hover:text-gray-200'
                        >
                            <FaSearch />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="search-container my-5 w-full p-5">
            <div className="search-box w-full min-h-20 border-0 rounded-3xl grid gap-2 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12">
                {/* search-bar */}
                <div className='md:col-span-2 lg:col-span-1 xl:col-span-2 col-span-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 lg:border-r-2 border-gray-200 dark:border-gray-800'>
                    {/* searchbar will called here */}
                    <SearchBar id_for_input='search-input' labelName='Where' placeholderName='Search destinations' />
                </div>
                {/* check-in bar */}
                <div className='md:col-span-2 lg:col-span-1 xl:col-span-2 col-span-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 lg:border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    {/* checkIn component will called here */}
                    <DateInput id_for_input='checkin-input' labelName='Check in' />
                </div>
                {/* check-out bar */}
                <div className='md:col-span-2 lg:col-span-1 xl:col-span-2 col-span-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 border-r-0 xl:border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    {/* checkOut component */}
                    <DateInput id_for_input='checkout-input' labelName='Check out' />
                </div>
                {/* add guests bar */}
                <div className='md:col-span-2 lg:col-span-1 xl:col-span-2 col-span-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 lg:border-r-2 border-gray-200 dark:border-gray-800'>
                    {/* addGuests Component */}
                    <AddGuests handleGuestModal={handleGuestModal} isGuestModalOpened={isGuestModalOpened} setIsGuestModalOpened={setIsGuestModalOpened} />
                </div>
                {/* category bar */}
                <div className='md:col-span-2 lg:col-span-1 xl:col-span-2 col-span-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-start justify-center flex-col p-2 lg:border-r-2 border-gray-200 dark:border-gray-800 transition-all duration-200'>
                    {/* categorySelector component */}
                    <CategorySelector />
                </div>
                <div className='md:col-span-2 lg:col-span-1 xl:col-span-2 col-span-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-3xl hover:border-0 flex items-center justify-center flex-col p-2 transition-all duration-200'>
                    <button type='button' className='w-auto flex items-center justify-between gap-2 rounded-md bg-amber-600 text-white px-3 py-1 active:scale-90 transition-transform duration-200'>Search <FaSearch /></button>
                </div>
            </div>
        </div>
    )
};

export default SearchContainer;