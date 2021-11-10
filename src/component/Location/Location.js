import React from 'react'
import './Location.css'
// import Comp from '../Comp/Comp'
const Location = ({ data }) => {
    console.log(data);
    return (
        <div className="info_wrapper">
                <div className="ip_add">
                    <h6>IP</h6>
                    <p>{data.ip}</p>
                </div>
                <div className="Loc">
                    <h6>location</h6>
                    <p>{data.location.region}</p>
                    <p>{data.location.country}</p>
                </div>
                <div className="time">
                    <h6>timezone</h6>
                    <p>{data.location.timezone}</p>
                </div>
                <div className="isp">
                    <h6>ISP</h6>
                    <p>{data.isp}</p>
                </div> 
        </div>
    )
}

export default Location
