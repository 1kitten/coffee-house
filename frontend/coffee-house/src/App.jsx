import './App.scss';
import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Story } from './components/Story/Story'
import { Services } from './components/Services/Services';



const BASE_URL = "http://127.0.0.1:8000/"


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
      <div className="app">
        <Header />
        <Hero />
        <Story />
        <Services />
      </div>
    </>
  );
}

export default App;
