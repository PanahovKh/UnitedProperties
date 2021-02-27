import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../../../context'
import '../index.css'

export const BackHomePage = () => {
    const { quote, value, previousPage} = useGlobalContext()
    const {id} = quote[value]

    return (
        <div className='backHome'>
            <div>
                <Link to={`${(id === 2 || id === 1) ? '/' : '/plans'}`}
                    className='footer_links'
                    onClick={() => previousPage(id)}>
                    {(id === 1) ? 'Back to the homepage' : 'Back to the previous step'}
                </Link>
            </div>
        </div>
    )
}

export default BackHomePage