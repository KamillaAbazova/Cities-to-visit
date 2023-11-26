import { useState } from "react";

function Carousel({images}) {
    const [attraction, setAttraction] = useState(0);
    const {placeName, about, picture} = images[attraction];

    const previousPlace = () => {
        setAttraction((attraction => {
          attraction --;
          if(attraction < 0) {
            return images.length - 1;
          }
          return attraction;
        }))
      }
      const nextPlace = () => {
        setAttraction((attraction => {
          attraction ++;
          if(attraction > images.length - 1) {
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
                  <h3>{placeName}</h3>
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