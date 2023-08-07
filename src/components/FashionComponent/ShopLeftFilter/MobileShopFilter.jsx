import React, {useState } from 'react';

import './MobileShopFilter.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShopPriceCatFilter from './ShopPriceCatFilter';

function MobileShopFilter() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    
    return (
        <div className='shopfilter'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                >
                    <Typography className="productfilter__category">Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Shoes & Bags</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Blouses & Shirts</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Dresses</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Swimwear</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Beauty</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Jewelry & Watch</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Accessories</p>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    
                >
                    <Typography className="productfilter__category">Sort by</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" /> Price Low to High</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Price High to Low</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Top Rated</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  Latest Release</p>
                    <p className='productfilter__subcategory'> <ArrowForwardIosOutlinedIcon className="subcategory__icon" />  All</p>
 
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="filter__accordion">
                <AccordionSummary
                    expandIcon={<AddIcon className="accordion__expand__icon" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    
                >
                    <Typography className="productfilter__category">Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ShopPriceCatFilter />
                </AccordionDetails>
            </Accordion>
            

            

        </div>
    )
}

export default MobileShopFilter
