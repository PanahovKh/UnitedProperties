import React from 'react'
import UnitedProperties from '../components/unitPop/UnitedProperties'
import Navbar from '../components/navbar/Navbar'
import Quote  from "../components/quote/Quote";
import './index.css'

export const LeftPage = () => {
    return (
        <div className='wrapper'>
            <UnitedProperties />
            <Navbar />
            <Quote />
        </div>
    )
}

export default LeftPage