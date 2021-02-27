import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../context'
import '../index.css' 

const NextStep = () => {
    const {quote, value, nextPage} = useGlobalContext()
    const { id } = quote[value]

    return (
        <Link to={`${(id === 1) ? '/plans' :'/preferences' }`} onClick={() => nextPage(id)}>
            <button className={`nextStep_wrapper ${id === 3 && 'finish'}`} >
                <div className={`next_step ${id === 3 && 'arrowOff'}`}>
                    {(id === 3) ? 'Finish' : 'Next step'}
                </div>  
            </button>
        </Link>
    )
}

export default NextStep