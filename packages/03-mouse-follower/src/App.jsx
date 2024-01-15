import './App.css'
import {useState} from 'react'
import { useEffect } from 'react'

function App() {

  const [follow, setFollow] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  
  useEffect(()=>{
    const handleMove = (event) => {
      const {clientX , clientY} = event
      setPosition({x:clientX, y:clientY})
    }

    if(follow){
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [follow])

  return (
    <main>
      <h1>Mouse follower</h1>
      <div style={{
          position: 'absolute',
          height: 50,
          width: 50,
          backgroundColor: '#09f',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 0.8,
          left: -20,
          top: -25,
          transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setFollow(!follow)}>{follow ? 'Dejar de seguir':'Seguir'}</button>
    </main>
  )
}

export default App
