import React from 'react'
import Top from '../components/top/Top'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Inputs from '../components/inputs/Inputs'
import './index.css'

export const ContactDetails = () => {
    return (
        <div className='pages_wrapper'>
            <Top />
            <Header />
            <Inputs />
            <div className='content'>
                <h2 className='privacy_policy'>Privacy policy</h2>
                <p className='text'>We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                <div className='expand'>Expand privacy policy</div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactDetails