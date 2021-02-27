import React from 'react'
import Top from '../components/top/Top'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import RangeInput from '../components/inputs/RangeInput'
import './index.css'

export const InvestmentPlans = () => {
    return (
        <div  className='pages_wrapper'>
            <Top />
            <Header />
            <div className='budjet_plan-wrapper'>
                <h2 className='budjet_plan-text'>Ho much are you planning to invest in this year?</h2>
            </div>
            <RangeInput />
            <div className='investor_wrapper'>
                <h2 className='ivestor_title'>Are you an accredited investor?</h2>
                <form className='radio_inputs'>
                    <div className='yes_wrapper'>
                        <input className='radio_input' type='radio' name='yes_or_no' value='yes'/>
                        <label className='radio_label' htmlFor='yes'>Yes</label>
                    </div>
                    <div className='no_wrapper'>
                        <input className='radio_input' type='radio' name='yes_or_no' value='no'/>
                        <label className='radio_label' htmlFor='no'>No</label>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default InvestmentPlans