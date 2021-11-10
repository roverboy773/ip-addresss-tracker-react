import React, { useState, useEffect } from 'react'
import Location from '../Location/Location'
import './Header.css'
const Header = () => {
    const [inputState, setinputState] = useState('')
    const [clicked, setclicked] = useState(false)
    const [data, setdata] = useState({})

    const handleInput = (e) => {
        setinputState(e.target.value);
    }
    const handleButtonClick=()=>{
        setclicked(!clicked);
    }

    useEffect(() => {
        if(clicked===true){
        fetch("https://geo.ipify.org/api/v2/country?apiKey=at_4gBaFWnYJDyaykCzghQere9IsAWPv")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setclicked(false)
                setinputState(res.ip)
                setdata({...data,res})
                console.log(res)
                // setdata(res)
            })
        }
        return () => {

        }
    }, [clicked])

    return (
        <div className="header_div">
            <h4>IP Address Tracker</h4>
            <div className="input_wrapper">
                <input type="text"
                    placeholder="Search for any IP address or domain"
                    value={inputState} onChange={(e) => { handleInput(e) }}
                />
                <button onClick={()=>{handleButtonClick()}}>{
                    clicked?<div className="animated_loader">
                          
                    </div> :
                    <i className="las la-angle-right"></i>
                }</button>
            </div>
           {/* {console.log(data.res)} */}
           {data.hasOwnProperty("res")? <Location data={data.res}/>:null}
        </div>
    )
}

export default Header









