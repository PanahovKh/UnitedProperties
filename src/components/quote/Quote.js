import React from 'react'
import './index.css'
import {FaQuoteLeft} from 'react-icons/fa'
import { useGlobalContext } from '../../context'

export const Quote = () => {

    const {quote, value} = useGlobalContext()
    const { text, author, position } = quote[value]

    return (
        <>
            <div className='quote_wrapper'>
                <div className='quote'>{text}</div>
                <div className='author'>{author}</div>
                <div className='position_wrapper'>
                    <div className='position'>{position}</div>
                    <div className='up'></div>
                </div>
            </div>
            <div className='quote_logo'>
                <FaQuoteLeft  className='icon'/>
            </div>
            <div className='vector'></div>
            </>
    )
}

export default Quote
