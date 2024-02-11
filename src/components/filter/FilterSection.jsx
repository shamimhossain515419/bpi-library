import React from 'react';

const FilterSection = () => {
    return (
        <div className=' flex  justify-center items-center gap-2 lg:gap-10 py-4  '>
            <div className=' w-full lg:w-[50%]'>
                <input className='  focus:border-[#4F46E5]  placeholder:text-[17px] outline-0 border-2 w-full py-3 px-4 rounded-[10px]' type='search' placeholder='Choose  your books'></input>
            </div>
        </div>
    );
};

export default FilterSection;