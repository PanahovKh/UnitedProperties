import React from 'react'
import './index.css'
import {useGlobalContext} from '../../context'

export const Top = () => {

    const { quote, value } = useGlobalContext()
    const { id } = quote[value] 
    return (
        <div className='top_wrapper'>
            <div className='step'>{`STEP ${id} OF 3`}</div>
            <div className='trouble'>Lost or have trouble? </div>
            <div className='get_help_wrapper'>
                Get help
            </div>
        </div>
    )
}

export default Top