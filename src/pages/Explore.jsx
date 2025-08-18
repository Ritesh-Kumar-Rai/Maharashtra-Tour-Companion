import { Link } from "react-router";
import ExploreCategories from "../components/ExploreCategories";
import SearchContainer from "../components/Search Panel/SearchContainer";
import PlaceCard from "../components/PlaceCard";
import { useState } from "react";

const Explore = () => {

    const [bookmarkedPlaces, setBookmarkedPlaces] = useState([]);

    const handleBookmark = (place, isAdding) => {
        setBookmarkedPlaces((prev) =>
            isAdding ? [...prev, place] : prev.filter((p) => p.id !== place.id)
        );
    };

    const trendingPlaces = [
        {
            id: "ajanta",
            name: "Ajanta Caves",
            image: "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWphbnRhJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D",
            region: "Aurangabad",
            category: "Heritage",
            rating: 4.9,
        },
        {
            id: "lonavala",
            name: "Lonavala",
            image: "https://images.unsplash.com/photo-1557919671-63a025c95782?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uYXZhbGF8ZW58MHx8MHx8fDA%3D",
            region: "Pune",
            category: "Hill Station",
            rating: 4.7,
        },
    ];

    const places = [
        {
            "id": "raigad-fort",
            "name": "Raigad Fort",
            "region": "Raigad",
            "category": "Fort",
            "rating": 4.8,
            "image": "https://source.unsplash.com/featured/?fort,india"
        },
        {
            "id": "ajanta-caves",
            "name": "Ajanta Caves",
            "region": "Aurangabad",
            "category": "Heritage",
            "rating": 4.9,
            "image": "https://source.unsplash.com/featured/?cave,india"
        },
        {
            "id": "ellora-caves",
            "name": "Ellora Caves",
            "region": "Aurangabad",
            "category": "Heritage",
            "rating": 4.9,
            "image": "https://source.unsplash.com/featured/?temple,india"
        },
        {
            "id": "lonavala",
            "name": "Lonavala",
            "region": "Pune",
            "category": "Hill Station",
            "rating": 4.7,
            "image": "https://source.unsplash.com/featured/?hillstation,india"
        },
        {
            "id": "mahabaleshwar",
            "name": "Mahabaleshwar",
            "region": "Satara",
            "category": "Hill Station",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?mountains,india"
        },
        {
            "id": "ganpatipule",
            "name": "Ganpatipule Beach",
            "region": "Ratnagiri",
            "category": "Beach",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?beach,india"
        },
        {
            "id": "shirdi",
            "name": "Shirdi",
            "region": "Ahmednagar",
            "category": "Pilgrimage",
            "rating": 4.8,
            "image": "https://source.unsplash.com/featured/?temple,shirdi"
        },
        {
            "id": "trimbakeshwar",
            "name": "Trimbakeshwar Temple",
            "region": "Nashik",
            "category": "Pilgrimage",
            "rating": 4.7,
            "image": "https://source.unsplash.com/featured/?trimbakeshwar"
        },
        {
            "id": "matheran",
            "name": "Matheran",
            "region": "Raigad",
            "category": "Hill Station",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?forest,india"
        },
        {
            "id": "alibaug",
            "name": "Alibaug Beach",
            "region": "Raigad",
            "category": "Beach",
            "rating": 4.4,
            "image": "https://source.unsplash.com/featured/?alibaug"
        },
        {
            "id": "kolhapur-mahalaxmi",
            "name": "Mahalaxmi Temple",
            "region": "Kolhapur",
            "category": "Pilgrimage",
            "rating": 4.8,
            "image": "https://source.unsplash.com/featured/?kolhapur"
        },
        {
            "id": "tarkarli",
            "name": "Tarkarli Beach",
            "region": "Sindhudurg",
            "category": "Beach",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?tarkarli"
        },
        {
            "id": "bhimashankar",
            "name": "Bhimashankar Temple",
            "region": "Pune",
            "category": "Pilgrimage",
            "rating": 4.7,
            "image": "https://source.unsplash.com/featured/?bhimashankar"
        },
        {
            "id": "kaas-plateau",
            "name": "Kaas Plateau",
            "region": "Satara",
            "category": "Nature",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?flowers,plateau"
        },
        {
            "id": "panchgani",
            "name": "Panchgani",
            "region": "Satara",
            "category": "Hill Station",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?valley,india"
        },
        {
            "id": "chikhaldara",
            "name": "Chikhaldara",
            "region": "Amravati",
            "category": "Hill Station",
            "rating": 4.4,
            "image": "https://source.unsplash.com/featured/?chikhaldara"
        },
        {
            "id": "bhandardara",
            "name": "Bhandardara",
            "region": "Ahmednagar",
            "category": "Nature",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?lake,india"
        },
        {
            "id": "khandala",
            "name": "Khandala",
            "region": "Pune",
            "category": "Hill Station",
            "rating": 4.4,
            "image": "https://source.unsplash.com/featured/?khandala"
        },
        {
            "id": "mumbai-gateway",
            "name": "Gateway of India",
            "region": "Mumbai",
            "category": "Monument",
            "rating": 4.7,
            "image": "https://source.unsplash.com/featured/?gatewayofindia"
        },
        {
            "id": "elephanta-caves",
            "name": "Elephanta Caves",
            "region": "Mumbai",
            "category": "Heritage",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?elephanta"
        },
        {
            "id": "sindhudurg-fort",
            "name": "Sindhudurg Fort",
            "region": "Sindhudurg",
            "category": "Fort",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?sindhudurg"
        },
        {
            "id": "pratapgad",
            "name": "Pratapgad Fort",
            "region": "Satara",
            "category": "Fort",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?pratapgad"
        },
        {
            "id": "rajmachi",
            "name": "Rajmachi Fort",
            "region": "Pune",
            "category": "Fort",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?rajmachi"
        },
        {
            "id": "lohagad",
            "name": "Lohagad Fort",
            "region": "Pune",
            "category": "Fort",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?lohagad"
        },
        {
            "id": "torna",
            "name": "Torna Fort",
            "region": "Pune",
            "category": "Fort",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?torna"
        },
        {
            "id": "purandar",
            "name": "Purandar Fort",
            "region": "Pune",
            "category": "Fort",
            "rating": 4.4,
            "image": "https://source.unsplash.com/featured/?purandar"
        },
        {
            "id": "harishchandragad",
            "name": "Harishchandragad",
            "region": "Ahmednagar",
            "category": "Trek",
            "rating": 4.7,
            "image": "https://source.unsplash.com/featured/?harishchandragad"
        },
        {
            "id": "ratangad",
            "name": "Ratangad Fort",
            "region": "Ahmednagar",
            "category": "Trek",
            "rating": 4.6,
            "image": "https://source.unsplash.com/featured/?ratangad"
        },
        {
            "id": "nandur-madhmeshwar",
            "name": "Nandur Madhmeshwar Bird Sanctuary",
            "region": "Nashik",
            "category": "Nature",
            "rating": 4.5,
            "image": "https://source.unsplash.com/featured/?birds,sanctuary"
        },];

    return (
        <>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div class="embed-map-responsive"><div class="embed-map-container"><iframe class="embed-map-frame" frameborder="0" scrolling="no" marginheight="0" marginWidth="0" width='100%' height='100%' src="https://maps.google.com/maps?height=300&hl=en&q=maharashtra&t=p&z=14&ie=UTF8&iwloc=B&output=embed"></iframe><a href="https://cartoongames.io" style={{ fontSize: '2px', color: 'gray', position: 'absolute', bottom: 0, left: 0, zIndex: 1, maxHeight: '10px', overflow: 'hidden' }}>Cartoon Games</a><a href="https://heygames.org" style={{ fontSize: '2px !important', color: 'gray !important', position: 'absolute', bottom: 0, left: 0, zIndex: 1, maxHeight: '10px', overflow: 'hidden' }}>HeyGames</a><a href="https://map-embed.org" style={{ fontSize: '2px', color: 'gray', position: 'absolute', bottom: 0, left: 0, zIndex: 1, maxHeight: '10px', overflow: 'hidden' }}>google maps generator</a></div></div>
            </div>

            <hr className='my-10 border-gray-200 dark:border-gray-900' />

            {/* Search Panel */}
            <SearchContainer isFilterRequired />

            <hr className='my-10 border-gray-200 dark:border-gray-900' />

            {/* Category Pills */}
            <ExploreCategories isSwiper={true} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} onBookmark={handleBookmark} />
                ))}
                {trendingPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} onBookmark={handleBookmark} />
                ))}
                {trendingPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} onBookmark={handleBookmark} />
                ))}
                {trendingPlaces.map((place) => (
                    <PlaceCard key={place.id} place={place} onBookmark={handleBookmark} />
                ))}
            </div>

            {/* Curated Lists */}
            <section className="text-gray-800 py-6 md:px-4">
                <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">Curated Lists</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Top 10 Forts", link: "/list/forts" },
                        { title: "Hidden Temples in Konkan", link: "/list/temples" },
                        { title: "Nature Stays for Monsoon", link: "/list/nature" },
                    ].map((list) => (
                        <Link
                            key={list.title}
                            to={list.link}
                            className="p-4 bg-yellow-50 rounded-lg shadow hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-lg mb-2">{list.title}</h3>
                            <p className="text-sm text-gray-600">Explore handpicked destinations</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Experience Highlights */}
            <section className="text-gray-800 py-6 md:px-4">
                <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">Unique Experiences</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[{ n: "Trekking", i: '🌄' }, { n: "Boating", i: '🚣‍♀️' }, { n: "Cultural Tours", i: '🛕' }, { n: "Wildlife Safari", i: '🫎' }].map((exp) => (
                        <div key={exp.n} className="p-4 bg-orange-50 rounded-lg text-center shadow hover:shadow-md transition">
                            <div className="text-2xl mb-2">{exp.i}</div>
                            <h4 className="font-semibold">{exp.n}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Safety & Accessibility */}
            <section className="text-gray-800 py-6 md:px-4">
                <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">Safety & Accessibility</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/safety" className="p-4 bg-red-50 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">Emergency Info 🆘</h3>
                        <p className="text-sm text-gray-600">Find nearby hospitals, police stations, and SOS features</p>
                    </Link>
                    <Link to="/accessible" className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2">Accessible Tourism ♿</h3>
                        <p className="text-sm text-gray-600">Wheelchair-friendly places and guided tours</p>
                    </Link>
                </div>
            </section>

            {/* Cultural Insight */}
            <section className="text-gray-800 py-6 md:px-4">
                <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">Cultural Insights</h2>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Maharashtra is home to vibrant festivals like Ganesh Chaturthi, rich Maratha history, and diverse cuisine.
                        Discover stories behind traditions and local customs.
                    </p>
                    <Link to="/about" className="text-orange-600 font-semibold mt-2 inline-block hover:underline">
                        Learn More →
                    </Link>
                </div>
            </section>
        </>
    )
};

export default Explore;
