// Search Page is particularly used for search results and detail list of available places/more

import { useState } from "react";
import Pagination from "../components/Pagination";
import SearchContainer from "../components/Search Panel/SearchContainer";
import ToggleButton from "../components/ToggleButton";
import PlaceCard from "../components/PlaceCard";

const Search = () => {

    const [toggleInput, setToggleInput] = useState(false);

    return (
        <>
            <SearchContainer isFilterRequired />
            <hr className="my-10 border-gray-200 dark:border-gray-900" />
            <div className="flex items-center justify-between py-8">
                <div className="flex items-center gap-2">
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">Image</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">Video</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200 active">Audio</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">All Media Type</button>

                </div>
                <ToggleButton labelName="View on Map" afterCheckedLabelName="Hide Map" toggleInput={toggleInput} setToggleInput={setToggleInput} />
            </div>
            <section className="flex gap-2 min-h-[90vh] h-full w-full">
                <div className={`${toggleInput ? 'w-[50%]' : 'w-full'}`}>
                    <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {new Array(10).fill('_').map((_, index) => (
                            <PlaceCard key={index} place={{}} />
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