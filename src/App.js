import { useState } from 'react';
import { data } from './data';
import { datas } from './datas';
import './App.css';
import Carousel from './Carousel';

function App() {

  const [cities, setCities] = useState(data);
  
  

  const removeCity = (id) => {
    let newCities = cities.filter(city => city.id !== id);
    setCities(newCities)
  }
  
  return (
    <div>
      <div className='container'>
        <h1>List of {cities.length} cities to visit</h1>
      </div>
      {cities.map((city => {
        const {id, cityName, image, description} = city;

        return (
          <div key={id}>
            <div className='container header'>
              <h2>{id} - {cityName}</h2>
            </div>
            <div className='container'>
              <Carousel images={image}/>
            </div>
            <div className='container'>
              <p>{description}</p>
            </div>
    
              
            
            <div className='container'>
              <button onClick={() => removeCity(id)}>Remove</button>
            </div>
          </div>
          )
      }))}
      <div className='container'>
        <button className='del' onClick={() => setCities([])}>Delete all</button>
      </div>
      <div className='container'>
        <h2 className='heading'>{datas.length} famous places to visit</h2>
      </div>
      
    </div>
  );
}

export default App;
