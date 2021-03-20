import React from 'react';

const TransportType = (props) => {
    const {TransportName,image}=props.transportType;
    return (
        <div className=" m-2 p-4  text-center shadow transport" style={{cursor:"pointer",width:"280px"}} >
            <img className="w-50" src={image} alt=""/>
            <h5>{TransportName}</h5>
        </div>
    );
};

export default TransportType;