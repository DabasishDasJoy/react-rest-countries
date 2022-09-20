import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
//countries component
function Countries() {
  //Step 1: Control state
  const [countries, setCountries] = useState([]);

  //Step 2: Use Effect to update state
  useEffect(()=>{
    //Step 2: fetch data
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []); 
  
  return (
    <div>
      <h1>Visit Countries All Over the WORLD!</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>
  );
}
export default App;
