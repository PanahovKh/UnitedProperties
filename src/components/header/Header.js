import React from 'react'
import './index.css'
import {useGlobalContext} from '../../context'


export const Header = () => {

    const {quote, value} = useGlobalContext()
    const {id} = quote[value]

    return (
        <div className='header_wrapper'>
            <h1 className='header'>
                {((id === 1)? 'Сontact details' : (id === 2) ? 'Investment plans' : 'Investment preferences')}
            </h1>
            <div className='header_text'>
                {((id === 1) ? 'Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you' :
                (id === 2) ? 'Let us know about your investment plans. This will help us get you to the right expert who will help you further' :
            'This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals')}
            </div>

        </div>
    )
}

export default Header