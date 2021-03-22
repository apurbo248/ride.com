import React from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { locations } from "../../AllData/locationData";
import { transportData } from '../../AllData/transportTypeData';
import FoundTransport from "../Result/Result";

const PickAndDrop = () => {
    const {key} = useParams()
    const transport = transportData.find(transport => transport.key === key )
  const [locationData] = useState(locations);
  const [search, setSearch] = useState(false);
  const [destination, setDestination] = useState({
    pick: "",
    drop: "",
  });
  let transportAndDestination = {...transport,destination}
  
  const handleChange = (e) => {
      let isFieldValid = true
      if(e.target.name ==='pick'){
        isFieldValid = e.target.value 
      }
      if(e.target.name ==='drop'){
        isFieldValid = e.target.value 
      }
    if(isFieldValid){
       
       destination[e.target.name] = e.target.value;
       setDestination(destination)
    
    }
  };

  return (
    <Container>
      {!search ? (
        <Card
          className="my-3 p-3 w-150"
          style={{ backgroundColor: "#e0dcdc" ,borderRadius:'10px', color:'black' }}
        >
          <form onSubmit={() => setSearch(true)}>
            <label htmlFor="pick">Pick From</label>
            <br />
            <input
            
              name="pick"
              onChange={handleChange}
              className=" form-control"
              list="pick"
              placeholder="select pick up location"
              required
            />
            <datalist name="pick" id="pick">
              {locationData.map((location) => (
                <option value={location}>{location}</option>
              ))}
            </datalist>
            <br />
            <label htmlFor="drop">Drop To</label>
            <br />
            <input
            className="form-control"
              name="drop"
              onChange={handleChange}
              list="drop"
              placeholder="select drop location"
              required
            />
            <datalist name="drop" id="drop">
              {locationData.map((location) => (
                <option value={location}>{location}</option>
              ))}
            </datalist>
            <br />
            {/* <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" required/> */}
            <input
              className="btn btn-warning w-100 my-3"
              type="submit"
              value="search"
              style={{borderRadius:'10px'}}
            />
           
          </form>
        </Card>
      ):
      <FoundTransport transportAndDestination={transportAndDestination} key={transportAndDestination.key}></FoundTransport>
      } 
      
    </Container>
  );
};

export default PickAndDrop;
