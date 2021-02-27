import React from 'react'
import {useGlobalContext} from '../../context'
import BackHomePage from '../footer/components/BackHomePage'
import NextStep from '../footer/components/NextStep'
import './index.css'

export const Footer = () => {

    const {quote, value} = useGlobalContext()


    return (
        <div className='footer_wrapper'>
            <BackHomePage />
            <button className='skip_wrapper'>
                Skip for now    
            </button>
            <NextStep />
        </div>
    )
}

export default Footer