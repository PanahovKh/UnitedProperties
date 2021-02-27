import React from 'react'
import { Link } from 'react-router-dom'
import {GrSquare} from 'react-icons/gr'
import {RiSubtractLine} from 'react-icons/ri'
import { useGlobalContext } from "../../context";
import './index.css'

export const Navbar = () => {

    const { quote, value, setValue } = useGlobalContext()

    return (
        <>
            <div className='navbar'>
                {quote.map((item, index) => {
                    return (
                        <>
                            <div key={item.id} className='navWrapper'>
                                <div className= {`squareWrapper ${index === value && 'active-btn'} `}>
                                    <GrSquare />
                                </div>
                                <button className={`btn`}>
                                    <Link to={item.link}
                                        className={`text_wrapper ${index === value && 'active-btn'}`}
                                        onClick={() => setValue(index)}>
                                            {item.nav}
                                    </Link>
                                </button>
                            </div>
                            <div  key={index} className= {`lines ${index === value && 'active-btn'}`}>
                                <RiSubtractLine className='line' />
                                <RiSubtractLine className='line' />
                            </div>
                        </>
                    )
                })}
            </div>

        {/* <div className='navbar'>

                <div className='navWrapper'>
                    <div className='squareWrapper'>
                        <GrSquare className='square' />
                    </div>
                    <div>
                        <Link
                            onClick={() => setValue(id)}
                            className='text_wrapper'
                            to='/'>
                            Contact details
                        </Link>
                    </div>
                </div>
                <div className='lines'>
                    <RiSubtractLine  className='line'/>
                    <RiSubtractLine className='line' />
                </div>

            <div className='active'>
                <div className='navWrapper'>
                    <div className='squareWrapper'>
                        <GrSquare className='square' />
                    </div>
                    <div>
                        <Link onClick={() => setValue(id)} className='text_wrapper' to='/plans'>
                            Investment plans
                        </Link>
                    </div>
                </div>
                <div className='lines'>
                    <RiSubtractLine  className='line'/>
                    <RiSubtractLine className='line' />
                </div>
            </div>
            
            <div className='navWrapper active'>
                <div className='squareWrapper'>
                    <GrSquare className='square' />
                </div>
                <div>
                    <Link onClick={() => setValue(id)} className='text_wrapper' to='/preferences'>
                        Investment preferences
                    </Link>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Navbar