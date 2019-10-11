import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from "./Card";


const App = () => {
  const [warsData, setWarsData] = useState([]);
  const [resp, setResp] = useState([]);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
useEffect(() => {
  
  return axios.get(`https://swapi.co/api/people/1`)
    .then(response => {
      console.log(response.data);
      setWarsData(response.data);
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
        <Card characters={data.name} />
    </div>
  );
}

export default App;
