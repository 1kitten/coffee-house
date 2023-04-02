import './App.scss';
import { useState, useEffect } from 'react'
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header'
import Ihero from './assets/png/hero.png'



const BASE_URL = "http://127.0.0.1:8000/"

const Hero = () => {
  return (
    <div className='hero'>
      <img  src={Ihero} />
    </div>
  )
}

function App() {
  const [goodbye, setGoodbye] = useState()

  const fetchGoodbye = async () => {
    const url = BASE_URL
    const res = await fetch(url)
    const user = await res.json()
    setGoodbye(user)
  }
  
  useEffect(() => {
    fetchGoodbye()
  }, [])

  return (
    <>
      <Hero/>
      <div className="App">
        <div className='glov'></div>
        <div className='glov2'></div>
        <Header />
        <div className='div'> 
          <h1 className='text'>Coffe House</h1>
        </div>
       
        
      </div>
    </>
  );
}

export default App;
