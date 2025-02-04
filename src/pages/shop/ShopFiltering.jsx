import React from 'react';

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
    return (
        <div className='space-y-5 flex-shrink-0 mb__2'>
            <h3>Filters</h3>

            {/* Categories */}
            <div className='flex flex-col space-y-2 mb__3'>
                <h4 className='font-medium text-lg'>Category</h4>
                <hr className='mb__2' />
                {
                    filters.categories.map((category) => (
                        <label key={category} className='capitalize cursor-pointer mb__2'>
                            <input
                                type="radio"
                                name="category"
                                id="category"
                                value={category}
                                checked={filtersState.category === category}
                                onChange={(e) => setFiltersState({ ...filtersState, category: e.target.value })}
                            />
                            <span className='ml__0'>{category}</span>
                        </label>
                    ))
                }
            </div>

            {/* Colors */}
            <div className='flex flex-col space-y-2 mb__3'>
                <h4 className='font-medium text-lg'>Color</h4>
                <hr className='mb__2' />
                {
                    filters.colors.map((color) => (
                        <label key={color} className='capitalize cursor-pointer mb__2'>
                            <input
                                type="radio"
                                name="color"
                                id="color"
                                value={color}
                                checked={filtersState.color === color}
                                onChange={(e) => setFiltersState({ ...filtersState, color: e.target.value })}
                            />
                            <span className='ml__0'>{color}</span>
                        </label>
                    ))
                }
            </div>

            {/* Price */}
            <div className='flex flex-col space-y-2 mb__3'>
                <h4 className='font-medium text-lg'>Price Range</h4>
                <hr className='mb__2' />
                {
                    filters.price.map((range) => (
                        <label key={range.label} className='capitalize cursor-pointer mb__2'>
                            <input
                                type="radio"
                                name="price"
                                id="price"
                                value={`${range.min}-${range.max}`}
                                checked={filtersState.price === `${range.min}-${range.max}`}
                                onChange={(e) => setFiltersState({ ...filtersState, price: e.target.value })}
                            />
                            <span className='ml__0'>{range.label}</span>
                        </label>
                    ))
                }
            </div>

            {/* Clear filters */}
            <button
                className='bg__primary text-white px__2 py__0 rounded cursor-pointer'
                onClick={clearFilters}
            >Clear All Filters</button>
        </div>
    );
}

export default ShopFiltering;