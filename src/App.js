import React, { useEffect, useRef, useState } from 'react';
import { BsFillPlayFill, BsBatteryFull } from 'react-icons/bs'
import { FaRandom } from 'react-icons/fa'
import { AiFillFastBackward, AiOutlinePause, AiFillApple } from 'react-icons/ai'
import db from './db.json'
import './App.css'

function App() {

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const cubeRef = useRef(null)

  const handleKeyDown = event => {
    console.log(event.key);
    switch (event.key) {
      case "ArrowUp":
        setRotateX(prev => prev + 5)
        break
      case "ArrowDown":
        setRotateX(prev => prev - 5)
        break
      case "ArrowRight":
        setRotateY(prev => prev + 5)
        break
      case "ArrowLeft":
        setRotateY(prev => prev - 5)
        break
      case " ":
        setRotateY(0)
        setRotateX(0)
        break
    
      default:
        break;
    }
  }

  // useEffect(() => {
  //   console.log(`X: ${rotateX} // Y: ${rotateY}`);
  // }, [rotateX, rotateY])

  

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown} className='container'>
      <div className="scene">
        <div ref={cubeRef} style={{transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`}} className="cube">
          <div className="face front">
            <div className='screen'>
              <div className='bar'>
                <FaRandom style={{marginLeft: 4, marginBottom: 4}} />
                <span style={{marginBottom: 4}}>Now Playing</span>
                <BsBatteryFull style={{marginRight: 4, marginBottom: 4}} />
              </div>
              <img src={db.poster} className="poster" />
              <div className='wrapper-player'>
                <span style={{fontWeight: 'bold'}}> {db.title} </span>
                <span style={{fontSize: 10}}> {db.artite} </span>
                <div className='player'>
                  <span> 0.45 </span>
                  <div className='bar-player'>
                    <span className='bar-progress' />
                  </div>
                  <span> -2:20 </span>
                </div>
              </div>
            </div>
            <div className='circle'>
              <span className='text-circle text-top'>Menu</span>
              <span className='text-circle text-right'>
                <AiFillFastBackward style={{transform: 'scaleX(-1)'}} />
              </span>
              <span className='text-circle text-bottom'>
                <BsFillPlayFill />
                <AiOutlinePause />
              </span>
              <span className='text-circle text-left'>
                <AiFillFastBackward />
              </span>
            </div>
          </div>
          <div className="face back">
            <AiFillApple size={20} />
            <span>IPod</span>
          </div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
