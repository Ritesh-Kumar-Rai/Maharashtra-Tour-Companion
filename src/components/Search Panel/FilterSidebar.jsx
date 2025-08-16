import { IoMdClose } from "react-icons/io";
import { FcClearFilters } from "react-icons/fc";
import { AddGuests, CategorySelector, DateInput, MediaTypeSelector } from "./SearchContainer";


const FilterSidebar = ({ handleGuestModal, isGuestModalOpened, setIsGuestModalOpened, isOpen, closeSidebar, clearAppliedFilter }) => {
    return (<>
        {/* sidebar */}
        {/* classname for main div of sidebar: bg-white dark:bg-gray-900 */}
        <aside
            className={`search-box fixed top-0 right-0 h-full w-full md:w-[400px] dark:bg-transparent bg-white opacity-95 backdrop-blur-xl shadow-xl z-50 transform transition-transform duration-300 overflow-y-scroll scroll-smooth ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Search Filters
                </h2>
                <button
                    onClick={closeSidebar}
                    className="text-3xl text-gray-500 dark:text-gray-400 hover:text-red-600 font-bold cursor-pointer transition-colors"
                >
                    <IoMdClose />
                </button>

            </div>

            {/* Form */}
            <form className="p-5 space-y-4">
                <div className="form-control mb-6 w-full flex flex-col gap-2">
                    <DateInput id_for_input="checkin-input" custom_tailwind_style="px-4 py-2 border-1 border-gray-300 font-medium" />
                </div>

                <div className="form-control mb-6 w-full flex flex-col gap-2">
                    <DateInput id_for_input="checkout-input" labelName="Check out" custom_tailwind_style="px-4 py-2 border-1 border-gray-300 font-medium text-md" />
                </div>

                <div className="form-control mb-6 w-full flex flex-col gap-2">
                    <AddGuests handleGuestModal={handleGuestModal} isGuestModalOpened={isGuestModalOpened} setIsGuestModalOpened={setIsGuestModalOpened} custom_tailwind_style="px-4 py-2 border-0 font-medium text-md" />
                </div>

                <div className="form-control mb-6 w-full flex flex-col gap-2">
                    <CategorySelector custom_tailwind_style="px-4 py-3 border-1 border-gray-300" />
                </div>
                <div className="form-control mb-6 w-full flex flex-col gap-2">
                    <MediaTypeSelector custom_tailwind_style="px-4 py-3 border-1 border-gray-300" />
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type='button'
                        className='flex items-center justify-center gap-1 space-x-2 rounded-md px-3 h-8 text-sm font-bold border bg-white shadow-xl transition-all hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-gray-300 dark:bg-gray-800 dark:border-slate-500 dark:hover:bg-gray-700 dark:text-white dark:hover:text-gray-200 active:scale-90 duration-200'
                        onClick={() => clearAppliedFilter([])}
                    > <FcClearFilters fontSize={19} /> Clear All</button>
                </div>

            </form>
        </aside>
    </>);
};

export default FilterSidebar;
