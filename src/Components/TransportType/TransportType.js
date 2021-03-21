import React from 'react';
import { Link } from 'react-router-dom';

const TransportType = (props) => {
    const {type,image,key}=props.transport;
    return (
        <div className=" m-2 p-2 text-center shadow transport shadow " style={{cursor:"pointer",width:"280px"}} >
            <Link  to={"/destination/"+key}>
            <img className="w-45" src={image} alt=""/>
            </Link>
            <Link  to={"/destination/"+key}>
            <h5>{type}</h5>
            </Link>
        </div>
    );
};

export default TransportType;