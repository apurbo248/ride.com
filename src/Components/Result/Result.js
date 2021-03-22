import React from 'react';
import './Result.css'
import peopleIcon from '../../images/peopleicon.png'
import { fareChart } from '../../AllData/fare';
const Result = (props) => {
    const {key="bk1",destination} = props.transportAndDestination
    console.log('destination',key,destination)
    const foundTransport = fareChart.filter(transport=> transport.key === key)
    return (
        <div className="found">
            <div className="route">
            <ul>
                <li>{destination.pick}</li>
                <li>{destination.drop}</li>
            </ul>
            </div>
             {
                 foundTransport.map(transport=>(
                    <div className="rides">
                    <div className="ride">
                        <img src={transport.image} alt="" className="ride-image"/>
                        <p className="ride-type " style={{color:'black'}}>{transport.type}</p>
                        <p className="passenger" style={{color:'black'}}><img src={peopleIcon} alt=""/>{transport.passenger}</p>
                        <p className="fare" style={{color:'black'}}>${transport.fare}</p>
                    </div>     
                    </div>
                 ))
             }   
        </div>
    );
};

export default Result;