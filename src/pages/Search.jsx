// Search Page is particularly used for search results and detail list of available places/more
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination";
import SearchContainer from "../components/Search Panel/SearchContainer";
import ToggleButton from "../components/ToggleButton";
import PlaceCard from "../components/PlaceCard";
import BreadCrumb from "../components/BreadCrumb";

const Search = () => {

    const [toggleInput, setToggleInput] = useState(false);
    const img = ["https://images.unsplash.com/photo-1751222169051-4ae0dede4be7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1699953792366-2bba114dcd5e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    let isFetchedFirstTime = useRef(false);
    let markerDetail = useRef('');

    useEffect(() => {

        const controller = new AbortController();

        if (toggleInput) {
            var map = L.map('map').setView([19.11439468119291, 72.82859302101595], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            var marker = L.marker([19.113044757606083, 72.82666900782326]).addTo(map); // marking to target position

            /* function onMapClick(e) {
                 alert("You clicked the map at " + e.latlng.toString());
             } */

            // map.on('click', onMapClick);
            async function fetchData() {
                if (!isFetchedFirstTime.current) {

                    const lat = 19.113044757606083;
                    const lng = 72.82666900782326;
                    try {

                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`, { signal: controller.signal })
                        const data = await response.json();
                        console.log(data);
                        // alert(`Marker clicked! Place: ${data.display_name}`);
                        markerDetail.current = `<b style="color: crimson;">${data.name}</b><br><b>Address:</b>${data.display_name}`;
                        isFetchedFirstTime.current = true;
                        alert(markerDetail.current)

                    } catch (error) {
                        console.error('Error fetching place information:', error);
                    }

                }

                marker.bindPopup(markerDetail.current).openPopup();

            }
            fetchData();

            // Add a click event listener to the marker
            /* marker.on('click', function (e) {
                 var lat = e.latlng.lat;
                 var lng = e.latlng.lng;
 
                 // Fetch place information using a geocoding API
                 fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                     .then(response => response.json())
                     .then(data => {
                         console.log(data)
                         alert(`Marker clicked! Place: ${data.display_name}`);
                     })
                     .catch(error => console.error('Error fetching place information:', error));
             });*/
        }

        return () => {
            controller.abort();
        };
    }, [toggleInput]);

    return (
        <>
            <div className="my-2 py-0 px-2">
                <BreadCrumb />
            </div>
            <SearchContainer isFilterRequired />
            <hr className="my-10 border-gray-200 dark:border-gray-900" />
            <div className="flex items-center justify-end py-8">
                {/* <div className="flex items-center gap-2">
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">Image</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">Video</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200 active">Audio</button>
                    <button
                        className="py-1 px-2 inline-block rounded-lg bg-white dark:bg-gray-600 dark:text-white transition hover:bg-gray-200 active:bg-gray-500 border-1 border-zinc-200">All Media Type</button>

                </div> */}
                <ToggleButton labelName="View on Map" afterCheckedLabelName="Hide Map" toggleInput={toggleInput} setToggleInput={setToggleInput} />
            </div>
            <section className="relatives flex gap-2 min-h-[90vh] h-full w-full">
                <div className={`${toggleInput && '2xl:w-[50%]'} w-full`}>
                    <div className="py-6 flex flex-wrap gap-6">
                        {new Array(10).fill(null).map((_, index) => (
                            <PlaceCard key={index} place={{ name: 'lorem', region: 'maharashtra/mumbai', category: 'temple', image: img[Math.floor(Math.random() * 2)] }} />
                        ))}
                    </div>
                    <Pagination />
                </div>
                {toggleInput && <div className="w-full 2xl:w-[50%] min-h-[30%] h-full xl:h-[85vh] fixed top-0 xl:top-30 right-0 xl:sticky z-20 xl:z-10 shadow-md border-2 border-zinc-500 backdrop-blur-sm rounded-md p-1">
                    <button type="button" aria-label="close map" className="backdrop-blur-md w-fit h-fit rounded-md absolute top-1 right-1 z-10" onClick={() => setToggleInput(p => !p)}><IoMdClose size={40} /></button>
                    <div id="map" className="w-full h-full z-[2]">
                        {/* The Leaflet Map will render here */}
                    </div>
                </div>}

            </section>
        </>
    );
};


export default Search;