import { useEffect, useState } from 'react';
import logo from '../assets/logoipsum-custom-logo.svg';
import { AiOutlineGlobal } from "react-icons/ai";
import ThemeSwitcher from './themeSwitcher';
import { NavLink } from 'react-router';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkThemed, setIsDarkThemed] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(prev => !prev) }

    useEffect(() => {
        const dark_mode = isDarkThemed ? 'dark' : '';
        document.documentElement.setAttribute('class', dark_mode);
    }, [isDarkThemed]);

    return (
        <header className='w-full max-w-screen backdrop-blur-md sticky top-0 shadow-md border-b-2 border-transparent dark:border-slate-600 z-10'>
            <div className='w-full flex items-center justify-between gap-20 p-2 md:p-4'>
                {/* logo */}
                <div className="logo min-w-[200px]">
                    <img src={logo} alt="maharashtra tour companion logo" className='w-full md:w-2xs' />
                </div>

                {/* nav links */}
                <div className={`md:flex absolute bg-slate-300 dark:bg-slate-700 p-5 md:p-0 top-15 w-full ${isMenuOpen ? 'right-0' : 'right-[-100%]'} md:static md:bg-transparent md:dark:bg-transparent md:w-[70%] items-center justify-end 2xl:justify-between gap-15 transition-right duration-500 z-100`}>
                    <nav className={`static md:absolute md:bg-slate-300 md:dark:bg-slate-700 ${isMenuOpen ? 'right-0' : 'right-[-100%]'} top-20 lg:w-[50%] sm:w-full md:p-5 2xl:static 2xl:bg-transparent 2xl:dark:bg-transparent 2xl:w-full z-100 transition-right duration-500`}>
                        <ul className='flex items-center flex-col 2xl:flex-row text-md gap-5'>
                            <li><NavLink to={'/'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`}>Home</NavLink></li>
                            <li><NavLink to={'/explore'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >Explore</NavLink></li>
                            <li><NavLink to={'/hospitality'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >Hospitality</NavLink></li>
                            <li><NavLink to={'/safety&utilities'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >Safety & Utilities</NavLink></li>
                            <li><NavLink to={'/saved-places'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >Saved Places</NavLink></li>
                            {/* <li><NavLink to={'/ev-charging-stations'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >EV Charging Stations</NavLink></li> */}
                            <li><NavLink to={'/notices'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >Notices</NavLink></li>
                            <li><NavLink to={'/about-us'} className={({ isActive }) => `text-gray-700 transition hover:text-amber-900 dark:text-white dark:hover:text-white/75 ${isActive && 'active'}`} >About Us</NavLink></li>
                        </ul>
                    </nav>
                    {/* language, theme and login element */}
                    <div className='mt-10 md:m-auto flex items-center justify-end md:justify-between gap-9 flex-wrap md:flex-nowrap'>
                        <label className='flex items-center gap-2 dark:text-white' htmlFor='global-language-selector'>
                            <AiOutlineGlobal />
                            <select name="global-language" className='dark:bg-gray-700 dark:text-white py-1 px-2 rounded-md' id='global-language-selector'>
                                <option value="english">English</option>
                                <option value="marathi">Marathi</option>
                                <option value="hindi">Hindi</option>
                                <option value="french">French</option>
                                <option value="japanese">Japanese</option>
                                <option value="chinese">Chinese</option>
                            </select>
                        </label>

                        <ThemeSwitcher theme={{ isDarkThemed, setIsDarkThemed }} />

                        <button type='button' className='px-4 py-1 border-0 bg-amber-500 hover:bg-amber-400 outline-2 outline-transparent active:outline-orange-600 dark:active:outline-orange-500 transition-outline  duration-300 ease-in-out text-white font-medium rounded-md flex items-center justify-center w-full md:w-auto'>Login</button>
                    </div>
                </div>

                {/* Mobile menu toggle button */}
                <div className="block 2xl:hidden">
                    <button
                        onClick={toggleMenu}
                        className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    >
                        {/* Hamburger icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {/* Show different icons based on menu state */}
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> // X icon
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

