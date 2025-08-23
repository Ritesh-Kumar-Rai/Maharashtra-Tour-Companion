// Search Page is particularly used for search results and detail list of available places/more

import { useState } from "react";
import Pagination from "../components/Pagination";
import SearchContainer from "../components/Search Panel/SearchContainer";
import ToggleButton from "../components/ToggleButton";
import PlaceCard from "../components/PlaceCard";

const Search = () => {

    const [toggleInput, setToggleInput] = useState(false);
    const img = ["https://images.unsplash.com/photo-1751222169051-4ae0dede4be7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1699953792366-2bba114dcd5e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    let i = 0;

    return (
        <>
            <SearchContainer isFilterRequired />
            <hr className="my-10 border-gray-200 dark:border-gray-900" />
            <div className="flex items-center justify-between py-8">
                <div className="flex items-center gap-2">
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">Image</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">Video</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200 active">Audio</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">All Media Type</button>

                </div>
                <ToggleButton labelName="View on Map" afterCheckedLabelName="Hide Map" toggleInput={toggleInput} setToggleInput={setToggleInput} />
            </div>
            <section className="flex gap-2 min-h-[90vh] h-full w-full">
                <div className={`${toggleInput ? 'w-[50%]' : 'w-full'}`}>
                    <div className="py-6 flex flex-wrap gap-6">
                        {new Array(10).fill(img[Math.floor(Math.random() * 2)]).map((_, index) => (
                            <PlaceCard key={index} place={{ name: 'lorem', region: 'maharashtra/mumbai', category: 'temple', image: _ }} />
                        ))}
                    </div>
                    <Pagination />
                </div>
                {toggleInput && <div className="w-[50%] shadow-2xl border-2 border-zinc-500">
                    <h2>Lorem ipsum dolor sit.</h2>
                </div>}

            </section>
        </>
    );
};

export default Search;