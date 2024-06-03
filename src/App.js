import { Fragment, useState } from 'react';
import './App.css';
const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]

function App() {
  const [img, setImg] = useState(0);
  const next = ()=>{
    setImg(img === images.length - 1 ? 0 : img + 1);
  }
  const prev = ()=>{
    setImg (img === 0 ? images.length - 1 : img - 1);
  }
  return (
    <Fragment>
    <h1>Image Slider</h1>
    <div className='slider'>
    <div className='next_arr' onClick={next}>
    ⬅
    </div>
    <div className='prev_arr' onClick={prev}>
    ⮕
    </div>
    <div className='content'>
    {
      images.map((image, index)=>(
        img === index && (
          <div key={image} className='slide'>
          <img src={image} alt={image} />
          </div>
        )
      ))
    }

    </div>

    </div>
    </Fragment>
    
  );
}

export default App;
