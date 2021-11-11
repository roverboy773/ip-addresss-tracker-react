import React, { useState, useEffect } from 'react'
import Location from '../Location/Location'
import loader from '../../images/circles-menu-1.gif'
import './Header.css'
const Header = ({pos}) => {
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
            document.querySelector('button').style.backgroundColor="white";
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((res) => {
                if(res.city){
               
                pos([res.latitude,res.longitude])
                setclicked(false)
                setinputState(res.ip)
                setdata({...data,res})
               
                }
            document.querySelector('button').style.backgroundColor="black";

              
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
                          <img src={loader} />
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









