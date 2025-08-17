import { Link } from "react-router";
import ExploreCategories from "../components/ExploreCategories";
import SearchContainer from "../components/Search Panel/SearchContainer";

const Explore = () => {
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

            {/* Curated Lists */}
            <section className="py-6 md:px-4">
                <h2 className="text-xl font-semibold mb-4">Curated Lists</h2>
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
            <section className="py-6 md:px-4">
                <h2 className="text-xl font-semibold mb-4">Unique Experiences</h2>
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
            <section className="py-6 md:px-4">
                <h2 className="text-xl font-semibold mb-4">Safety & Accessibility</h2>
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
            <section className="py-6 md:px-4">
                <h2 className="text-xl font-semibold mb-4">Cultural Insights</h2>
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
