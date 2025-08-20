import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FcShare } from "react-icons/fc";
import { Link } from "react-router";

const PlaceCard = ({ place, onBookmark }) => {
    const [bookmarked, setBookmarked] = useState(false);
    const [liked, setLiked] = useState(false);

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
        onBookmark(place, !bookmarked); // Pass to parent
    };

    const handleLike = () => {
        setLiked(prev => !prev);
    };

    const handleShare = (title_of_link = '', place = '') => {
        if (navigator.share) {
            navigator
                .share({
                    title: title_of_link,
                    text: place,
                    url: window.location.href,
                })
                .then(() => console.log("Shared Successfully"))
                .catch((error) => alert(error));

        } else {
            alert('Web Share API is not supported on this device or browser.');
            navigator.clipboard.writeText(window.location.href);
        }
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
                    <div className="w-fit flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-500 hover:text-amber-600 transition flex items-center gap-0.5" onClick={handleLike}>{liked ? <BiSolidLike className="animate-bounce-scale-1" type="button" size={20} cursor='pointer' fill="royalblue" title="unlike" /> : <BiLike type="button" size={20} cursor='pointer' title="like" />} 12K</span> {/* like button */}
                        <span className="text-sm font-medium text-yellow-600" aria-label="ratings" title="ratings" aria-labelledby="ratings">⭐ {place.rating}</span> {/* ratings */}
                        <FcShare className="active:scale-90 transition-transform " cursor='pointer' aria-label="Share" type="button" title="share button" size={20} onClick={() => handleShare(place?.name, place?.region)} /> {/* share button */}
                    </div>
                    <button
                        onClick={handleBookmark}
                        className="text-gray-500 hover:text-amber-600 transition"
                        aria-label="Bookmark"
                    >
                        {bookmarked ? <FaBookmark size={20} color="gold" className="animate-bounce-scale-2" /> : <FaRegBookmark size={20} />}
                    </button> {/* bookmark button */}
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;
