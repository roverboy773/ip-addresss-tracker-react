import React,{useState,useEffect} from 'react'
import Location from '../Location/Location'
const Header = () => {
    const [inputState, setinputState] = useState('')
    const [data, setdata] = useState('')
    const handleInput=(e)=>{
          setinputState(e.target.value);
    }
    useEffect(() => {
        fetch("https://geo.ipify.org/api/v2/country?apiKey=at_4gBaFWnYJDyaykCzghQere9IsAWPv&ipAddress=8.8.8.8")
        .then((res)=> res.json())
        .then((res)=>{
         console.log(res);
        })
        return () => {
            
        }
    }, [inputState])

    return (
        <div>
            <h4>IP Address Tracker</h4>
            <input type="text"  
            placeholder="Search for any IP address or domain"
                value={inputState} onChange={(e)=>{handleInput(e)}}
            />
             <Location data={data} />
        </div>
    )
}

export default Header
