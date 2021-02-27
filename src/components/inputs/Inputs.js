import React, {useState, useEffect, useRef} from 'react'
import './index.css'
import {AiFillCheckSquare} from 'react-icons/ai'

const Inputs = () => {

    const [email, setEmail] = useState('')
    const [clicked, setClicked] = useState(false)
    const inputRef = useRef(null)
    console.log(inputRef)

    const validate = () => {
        if((/^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(email)) ) {
            // inputRef.current.style.background = <AiFillCheckSquare />
        } else {
            // return alert('Your e-mail nor correct')
        }
    }

    useEffect(() => {
        validate()
    },[email])

    const handleCLick = (e) => {
        setClicked(true)
    }

    return (
        <div className='inputs_wrapper'>
            <form>
                <div className='name_number'>
                    <div className='name'>
                        <label htmlFor='name' className='label'>Full Name</label>
                        <input
                            id='1'
                            type='text'
                            placeholder='Enter your name'
                            className={`input ${clicked && 'active_input'}`}
                            onClick={handleCLick}
                        />
                    </div>
                    <div className='number'>
                        <input
                            id='2'
                            type='number'
                            placeholder='Enter your number' 
                            className={`input ${clicked && 'active_input'}`}
                            onClick={handleCLick}
                        />
                    </div>
                </div>
                <div className='email'>
                    <label htmlFor='email' className='label active_label'>E-mail address</label>
                    <input
                        ref={inputRef}
                        id='3'
                        type='text'
                        value={email}
                        placeholder='Enter your e-mail'
                        className={`input ${clicked && 'active_input'}`}
                        onClick={handleCLick}
                        onChange={(e) => {setEmail(e.target.value)}} 
                    />
                </div>
                <div className='country'>
                    <label htmlFor='email' className='label '>Country</label>
                    <input type='country' placeholder='Enter your country' className='input' />
                </div>
            </form>
        </div>
    )
}

export default Inputs
