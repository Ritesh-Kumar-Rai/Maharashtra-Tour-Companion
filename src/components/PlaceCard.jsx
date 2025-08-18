import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const PlaceCard = ({ place, onBookmark }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
        onBookmark(place, !bookmarked); // Pass to parent
    };

    return (
        <div className="relative bg-white dark:bg-zinc-900  rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden group">
            {/* Image */}
            <Link to={`/place/${place.id}`}>
                <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </Link>

            {/* Info */}
            <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-zinc-200">{place.name}</h3>
                <p className="text-sm text-gray-500">{place.region} • {place.category}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium text-yellow-600">⭐ {place.rating}</span>
                    <button
                        onClick={handleBookmark}
                        className="text-gray-500 hover:text-amber-600 transition"
                        aria-label="Bookmark"
                    >
                        {bookmarked ? <FaBookmark size={20} color="gold" /> : <FaRegBookmark size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;
