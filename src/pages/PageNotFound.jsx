// src/pages/NotFound.jsx
import { Link } from 'react-router';
import img from "../assets/404_notfound.png";


export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-transparent dark:to-transparent px-4 py-10">
            <div className="container max-w-[1064px] m-auto p-5 bg-white rounded-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold text-[#182a45] mb-4">
                    404
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold text-[#182a45] mb-4">
                    Page Not Found
                </h1>
                <div className='w-full mt-10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1'>
                    <div className='col-span-1 order-2 md:order-1 p-4'>
                        <p className='text-[#414859] text-base md:text-2xl lg:text-4xl  lg:leading-12 max-w-xl mb-8'> Oops! It seems like some place you are trying to find is not available or might be removed by Govt. in Maharashtra.
                            <br /> <br />
                            Can you try to complain to God <span className="text-indigo-600 font-semibold">Kṛṣṇa</span>?
                        </p>
                        {/* Go Back Button */}
                        <Link
                            to="/"
                            className="bg-[#172949] block w-fit mt-5 text-white font-medium px-6 py-3 rounded-md shadow-md hover:scale-95 transition duration-300 animate-bounce"
                        >
                            Go back to home
                        </Link>
                    </div>
                    <div className='col-span-1 order-1 md:order-2 animate-pulse'>
                        <img src={img} alt="Maharashtra map with exclamation mark"
                            className="w-full h-auto object-contain" />
                    </div>
                </div>

            </div>
        </div>
    );
}

// p -> #414859
// btn -> #172949

