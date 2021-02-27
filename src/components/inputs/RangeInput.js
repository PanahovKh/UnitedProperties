import React, {useState} from 'react'
import {Slider}  from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './index.css'


const defaultColor = {
    width: 257,
    backgroundColor: '#35A0EE',
}

const useStyles = makeStyles({
        backgroundColor: '#35A0EE',
    });

const RangeInput = () => {
    
    const [value, setValue] = useState([150000, 400000])
    const [color, setColor] = useState(defaultColor)


    const classes = useStyles()

    const handleChange  = (e, newValue) => {
        setValue(newValue)
    }


    const mark = [
        {
            value: 10000,
            label: '$ 10000'
        },
        {   
            value: 200000,
            label: '$ 200000'
        },
        {
            value: 400000,
            label: '$ 400000'
        },
        {
            value: 600000,
            label: '$ 600000'
        },
        {
            value: 800000,
            label: '$ 800000'
        },
        {
            value: 1000000,
            label: '$ 1000000'
        },
    ]

    return (
        <div className='range_wrapper'>
            <div className='range'>
                <div className='input_wrap'>
                    <label htmlFor='name' className='label'>From</label>
                    <input
                        value={value[0]}
                        type='number'
                        className='value'
                        placeholder='$ 10,000'
                    />
                </div>
                <div className='input_wrap'>
                    <label htmlFor='name' className='label'>To</label>

                    <input
                        value={value[1]}
                        type='number'
                        className='value'
                        placeholder='$200,000' 
                    />
                </div>
            </div>

            <Slider
                className={classes}
                min={10000} max={1000000}
                value={value}
                onChange={handleChange}
                step={1000}
                marks={mark}
            />

        </div>
    )
}





export default RangeInput
