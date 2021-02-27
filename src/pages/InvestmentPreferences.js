import React from 'react'
import Top from '../components/top/Top'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './index.css'

const interested = [
    {id:1, title: 'Single family'},
    {id:2, title: 'Residential multifamily'},
    {id:3, title: 'Commercial retail'},
    {id:4, title: 'Commercial industrial'},
    {id:5, title: 'Commercial hospitality'},
    {id:6, title: 'Commercial warehousing'},
    {id:7, title: 'Commercial office'},
    {id:8, title: 'Other'},
    
]

export const InvestmentPreferences = () => {

    return (
        <div  className='pages_wrapper'>
            <Top />
            <Header />
            <div className='interested_wrapper'>
                <h2 className='interested_title'>What kind of real estate are you interested in?</h2>
                <form className='interested_form'>
                    {interested.map((item, index) => {
                        return (
                                <div key={item.id} className='radio_items'>
                                    <input className='checked_input' type='checkbox' name='checked'/>
                                    <p className='interest_text'>{item.title}</p>
                                </div>
                        )
                    })}
                    
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default InvestmentPreferences
