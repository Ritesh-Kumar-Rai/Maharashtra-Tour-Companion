import { Link } from "react-router";

// ExploreCategories.jsx
const categories = [
    { name: "Beaches", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685455023256Beach.png", value: "beaches" },
    { name: "Nature & Wildlife", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685463337851Wildlife.png", value: "nature&wildlife" },
    { name: "UNESCO Heritage Sites", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685462651459UNESCO%20Heritage%20Sites.png", value: "UNESCO-heritage-sites" },
    { name: "Hill Stations", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685463251390Hill%20station.png", value: "hill-stations" },
    { name: "Aquatic Sports", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685461897307Aquatic%20Sports.png", value: "aquatic-sports" },
    { name: "Unique Experiences", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685462367766Unique%20Exp.png", value: "unique-experiences" },
    { name: "Lake View Stays", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/16845057514573.png", value: "lake-view-stays" },
    { name: "Nature Stays", image: "https://images.unsplash.com/photo-1500413702358-48b1daad8ddc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZSUyMHN0YXlzfGVufDB8MHwwfHx8MA%3D%3D", value: "nature-stays" },
    { name: "City Stays", image: "https://images.unsplash.com/photo-1591685440380-f4881f94b89f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHklMjBzdGF5c3xlbnwwfDB8MHx8fDA%3D", value: "city-stays" },
    { name: "Caves", image: "https://plus.unsplash.com/premium_photo-1710119487366-ef814031eaf4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2ZXMlMjBzdGF5c3xlbnwwfDB8MHx8fDA%3D", value: "caves" },
    { name: "Temples", image: "https://media.istockphoto.com/id/516984446/photo/varanasi-burning-grounds-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=j4qpc4gkij7zVVuniYZiUu08pmCL3kfyWVtpHElNnqg=", value: "temples" },
    { name: "Forts", image: "https://mtdc-main.s3.ap-south-1.amazonaws.com/1685463903103Fort.png", value: "forts" },
];

export default function ExploreCategories({ isSwiper = false }) {

    if (isSwiper) {
        return (
            <section className="text-gray-800 py-6 md:px-4">
                <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">Explore by Category</h2>
                <div className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hidden">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={`/category/${cat.name.toLowerCase()}`}
                            className="relative flex-grow-1 group border-2 border-transparent outline-2 outline-amber-500 m-1 rounded-xl overflow-hidden h-12 min-w-fit w-max flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus:scale-[1.02] focus:shadow-2xl"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full absolute z-0 object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                                loading="lazy"
                            />
                            <div className="relative inset-0 bg-transparent bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                                <span className="block text-white text-sm text-nowrap font-semibold text-center px-4 drop-shadow-lg">
                                    {cat.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="py-10 px-6 md:px-16 bg-white dark:bg-black rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-500 dark:text-amber-400">
                Explore Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((cat, idx) => (
                    <a
                        key={idx}
                        href={`/explore?category=${cat.value}`}
                        className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus:scale-[1.02] focus:shadow-2xl"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-transparent bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                            <span className="text-white text-xl md:text-2xl font-semibold text-center px-4 drop-shadow-lg">
                                {cat.name}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
