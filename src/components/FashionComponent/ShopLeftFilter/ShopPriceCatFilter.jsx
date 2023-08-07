import React, { useState } from 'react'
import './ShopPriceCatFilter.css'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function valuetext(value) {
    return `${value}`;
}


const ShopPriceCatFilter = () => {
    const [value, setValue] = useState([20, 370]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    

    return (
        <div className='shoppricecatfilter'>
            <p className='filter__category__title'> Filters </p>

            <div className='filters__category'>
                <div className='filters__category__price__range'>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="primary"
                        min={100}
                        max={1500}
                    />

                    <p className='price__range__title'>Range: <br /> <span className='price__ranges'> &#8377;{value[0]} - &#8377;{value[1]} </span></p>
                </div>

                <div className='filters__variation__filter'>
                    <p className='variation__title'>Colors</p>
                    <div className='variation__values'>
                        <div className='variation__value'>
                        <Checkbox /> Red (52)
                        </div>
                        <div className='variation__value'>
                        <Checkbox /> Yellow (22)
                        </div>
                        <div className='variation__value'>
                        <Checkbox /> Black (20)
                        </div>
                    </div>
                </div>

                <div className='filters__variation__filter'>
                    <p className='variation__title'>Sizes</p>
                    <div className='variation__values'>
                        <div className='variation__value'>
                        <Checkbox /> XL (52)
                        </div>
                        <div className='variation__value'>
                        <Checkbox /> X (22)
                        </div>
                        <div className='variation__value'>
                        <Checkbox /> XXL (20)
                        </div>

                        <div className='variation__value'>
                        <Checkbox /> M (2)
                        </div>

                        <div className='variation__value'>
                        <Checkbox /> XX (12)
                        </div>
                    </div>
                </div>

                <div className="filters__button">
                    <button> <FilterAltIcon /> Filter</button>
                </div>
                

            </div>
        </div>
    )
}

export default ShopPriceCatFilter