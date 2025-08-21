import React from 'react'

const ToggleButton = ({ labelName = '', afterCheckedLabelName = '', toggleInput = false, setToggleInput = () => { throw new ReferenceError('expected `setToggleInput` method but never get it!') } }) => {

    const handleToggle = () => {
        setToggleInput(prev => !prev);
    };

    return (
        <label htmlFor="toggle-input" className='flex items-center gap-1 h-10 min-w-24 py-1 px-2 font-medium rounded-full bg-gray-100 dark:bg-gray-600 dark:text-gray-200 shadow-lg cursor-pointer select-none'>
            <input type="checkbox" id='toggle-input' className='peer sr-only' checked={toggleInput} onChange={handleToggle} />
            <span className='relative h-8 w-14 bg-gray-300 dark:bg-gray-700 transition-colors [-webkit-tap-highlight-color:_transparent] peer-checked:bg-green-500 dark:peer-checked:bg-green-600 rounded-full'>
                <span className={`absolute inset-y-0 start-0 m-1 grid size-6 place-content-center rounded-full bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200 transition-[inset-inline-start] ${toggleInput ? 'start-6' : 'start-0'} `}> {/* here in place of toogleInput we has peer-checked which was not available to nested child */}
                    {toggleInput ?
                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>)
                        :
                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>)
                    }
                </span>
            </span>
            {toggleInput ? afterCheckedLabelName : labelName}
        </label>
    )
};

export default ToggleButton;
