import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const Collection = () => {

  const { products } = useContext(ShopContext);

  const [showFilter,setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1sm:gap-10 pt border-t'>
      {/* filter options*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS</p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6
          ${showFilter ? '' : 'hidden'} sm:block `}>

        </div>
      </div>

    </div>
  )
}

export default Collection