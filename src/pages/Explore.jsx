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
        </>
    )
};

export default Explore;
