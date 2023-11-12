import { useState } from "react";
import { datas } from "./datas";

function Carousel() {
    const [attraction, setAttraction] = useState(0);
    const {number, name, about, picture} = datas[attraction];

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

      

return(
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
)
}

export default Carousel;