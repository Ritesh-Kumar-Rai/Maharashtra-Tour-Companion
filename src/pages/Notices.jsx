import NoticeCard from "../components/NoticeCard";


const Notices = () => {

    const temp_notices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <section className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-500 dark:text-amber-400">All Notices</h1>

            <div className="w-full mt-5">
                <div className="flex items-center justify-end p-2">
                    <select name="global-language" className='dark:bg-gray-700 dark:text-white py-1 px-2 border-1 border-gray-300 rounded-md' id='global-language-selector'>
                        <option selected>All Notices</option>
                        <option value="team-notices">Team Notices</option>
                        <option value="govt-notices">Govt. Notices</option>
                    </select>
                </div>
                <div className="p-2">
                    {temp_notices.map((each_notice) => <NoticeCard key={each_notice} />)}
                </div>
            </div>
        </section>
    )
};

export default Notices;
