import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CardInfo from "./CardInfo";
import { Container, Row } from 'reactstrap';


const App = () => {
const [data, setData] = useState([]);
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    return axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data);
        setData(response.data);

      })
      .catch(error => {
        console.log("Check for errors:", error);
      })
      }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
     <Container>
       <Row>
         <div className="card-cont">
            {setData.map((props, index, array) => {
           return (
          <CardInfo key={props.id}
            name={props.name}
            hair={props.hair_color}
            gender={props.gender}
            />
         )})}
         </div>
        </Row>
     </Container>
    </div>
  )
}
export default App;
