import { useState } from 'react';
import { data } from './data';
import { datas } from './datas';
import './App.css';

function App() {

  const [cities, setCities] = useState(data);
  const [attraction, setAttraction] = useState(0);
  const {number, name, about, picture} = datas[attraction];
  

  const removeCity = (id) => {
    let newCities = cities.filter(city => city.id !== id);
    setCities(newCities)
  }
  const previousPlace = () => {
    setAttraction((attraction => {
      attraction --;
      if(attraction < 0) {
        return datas.length - 1;
      }
      return attraction;
    }))
  }
  const nextPlace = () => {
    setAttraction((attraction => {
      attraction ++;
      if(attraction > datas.length - 1) {
        attraction = 0;
      }
      return attraction;
    }))
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
              <img src={image} width="500px" alt='city'/>
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
      <div className='box'>
                <div className='container'>
                  <img src={picture} width="400px" alt='place'/>
                </div>
                <div className='container'>
                  <h3>{number}. {name}</h3>
                </div>
                <div className='container'>
                  <p>{about}</p>
                </div>
                <div className='container'>
                  <button className='btn' onClick={previousPlace}>Previous</button>
                  <button className='btn' onClick={nextPlace}>Next</button>
                </div>

              </div>
    </div>
  );
}

export default App;
