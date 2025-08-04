import { IoIosClose } from "react-icons/io";

const ModalForNavORMenuBars = ({ style = '', closeModal = () => { }, }) => {
    {/* modal for guest selections */ }
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            className={`min-w-[300px] max-w-[400px] w-auto absolute top-12 left-0 border-2 border-slate-300 bg-white dark:bg-gray-900 dark:border-slate-700 shadow-2xl rounded-md p-2 z-1 transition-all duration-300 ${style}`}>
            <div className="flex items-center justify-end">
                <IoIosClose className="cursor-pointer" size={28} onClick={() => closeModal(false)} />
            </div>
            {/* adults quantity input */}
            <div className='w-full guest-control-container flex items-center border-b-2 border-gray-300 dark:border-gray-800 p-2'>
                <div className='w-[60%]'>
                    <h3 className='font-semibold'>Adults</h3>
                    <span className='text-slate-600'>Ages 13 or above</span>
                </div>
                <div className='w-[40%] flex items-center justify-center break-words'>
                    <div>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 disabled:bg-[#EBEBEB] disabled:text-[#ffff] dark:bg-slate-700 dark:active:bg-slate-600 dark:disabled:bg-slate-800' disabled>&minus;</button>
                        <span className='inline-block font-medium w-10 text-center'>0</span>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 dark:bg-slate-700 dark:active:bg-slate-600'>&#43;</button>

                    </div>
                </div>
            </div>
            {/* child quantity input */}
            <div className='w-full guest-control-container flex items-center border-b-2 border-gray-300 dark:border-gray-800 p-2'>
                <div className='w-[60%]'>
                    <h3 className='font-semibold'>Children</h3>
                    <span className='text-slate-600'>Ages 2-12</span>
                </div>
                <div className='w-[40%] flex items-center justify-center break-words'>
                    <div>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 disabled:bg-[#EBEBEB] disabled:text-[#ffff] dark:bg-slate-700 dark:active:bg-slate-600 dark:disabled:bg-slate-800' disabled>&minus;</button>
                        <span className='inline-block font-medium w-10 text-center'>0</span>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 dark:bg-slate-700 dark:active:bg-slate-600'>&#43;</button>

                    </div>
                </div>
            </div>
            {/* infants quantity input */}
            <div className='w-full guest-control-container flex items-center border-b-2 border-gray-300 dark:border-gray-800 p-2'>
                <div className='w-[60%]'>
                    <h3 className='font-semibold'>Infants</h3>
                    <span className='text-slate-600'>Under 2</span>
                </div>
                <div className='w-[40%] flex items-center justify-center break-words'>
                    <div>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 disabled:bg-[#EBEBEB] disabled:text-[#ffff] dark:bg-slate-700 dark:active:bg-slate-600 dark:disabled:bg-slate-800' disabled>&minus;</button>
                        <span className='inline-block font-medium w-10 text-center'>0</span>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 dark:bg-slate-700 dark:active:bg-slate-600'>&#43;</button>

                    </div>
                </div>
            </div>
            {/* pets quantity input */}
            <div className='w-full guest-control-container flex items-center p-2 py-3'>
                <div className='w-[60%]'>
                    <h3 className='font-semibold'>Pets</h3>
                    <span className='text-slate-600'><a href="#" className='text-sm underline'>Bringing a service animal?</a></span>
                </div>
                <div className='w-[40%] flex items-center justify-center break-words'>
                    <div>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 disabled:bg-[#EBEBEB] disabled:text-[#ffff] dark:bg-slate-700 dark:active:bg-slate-600 dark:disabled:bg-slate-800' disabled>&minus;</button>
                        <span className='inline-block font-medium w-10 text-center'>0</span>
                        <button type='button' className='bg-slate-100 w-8 h-8 font-bold rounded-sm active:bg-slate-300 dark:bg-slate-700 dark:active:bg-slate-600'>&#43;</button>

                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
};

export default ModalForNavORMenuBars;