import './App.scss';
import { useState, useEffect,  } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Story } from './components/Story/Story'
import { Services } from './components/Services/Services';
import { HeroCard } from './components/HeroCard/HeroCard';



const BASE_URL = "http://127.0.0.1:8000/"



function App() {

  const [goodbye, setGoodbye] = useState()
  const [scroll, setScroll] = useState(window.pageYOffset)

  useEffect(() => {
    fetchGoodbye()
  }, [])

  const fetchGoodbye = async () => {
    const url = BASE_URL
    const res = await fetch(url)
    const user = await res.json()
    setGoodbye(user)
  }
  const check = () => {
    setScroll(window.pageYOffset)
  }

  return (
    <>
      <div onWheel={check} className="app">
        <div >
          <Header />
          <Hero />
          <Story />
          <Services />
          <HeroCard scroll={scroll}/>
          <div style={{height: '300px', backgroundColor: '#fff', position: 'relative'}}>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
