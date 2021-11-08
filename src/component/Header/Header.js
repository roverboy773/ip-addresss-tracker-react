import React, { useState, useEffect } from 'react'
import Location from '../Location/Location'
import './Header.css'
const Header = () => {
    const [inputState, setinputState] = useState('')
    const [clicked, setclicked] = useState(false)
    const [data, setdata] = useState('')

    const handleInput = (e) => {
        setinputState(e.target.value);
    }
    useEffect(() => {
        fetch("https://geo.ipify.org/api/v2/country?apiKey=at_4gBaFWnYJDyaykCzghQere9IsAWPv")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
        return () => {

        }
    }, [inputState])

    return (
        <div className="header_div">
            <h4>IP Address Tracker</h4>
            <div className="input_wrapper">
                <input type="text"
                    placeholder="Search for any IP address or domain"
                    value={inputState} onChange={(e) => { handleInput(e) }}
                />
                <button>{
                    clicked?<div className="animated_loader">

                    </div> :
                    <i className="las la-angle-right"></i>
                }</button>
            </div>

            <Location data={data} />
        </div>
    )
}

export default Header









