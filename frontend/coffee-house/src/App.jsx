import './App.scss';
import { useState, useEffect, useRef } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Story } from './components/Story/Story'
import { Services } from './components/Services/Services';
import { HeroCard } from './components/HeroCard/HeroCard';



const BASE_URL = "http://127.0.0.1:8000/"



function App() {
  const heroCard = useRef(null)

  const [goodbye, setGoodbye] = useState()
  const [scroll, setScroll] = useState(window.pageYOffset)

  useEffect(() => {
    checkHover()
  }, [scroll])

  useEffect(() => {
    fetchGoodbye()
  }, [])

  const fetchGoodbye = async () => {
    const url = BASE_URL
    const res = await fetch(url)
    const user = await res.json()
    setGoodbye(user)
  }

  const checkHover = () => {
    if (window.pageYOffset > 100) {
      heroCard.current.classList.add('_active')
    } else {
      heroCard.current.classList.remove('_active')
    }
  }
  

  return (
    <>
      <div onWheel={() => setScroll(window.pageYOffset)} className="app">
        <div >
          <Header />
          <Hero />
          <Story />
          <Services />
        </div>
        <div ref={heroCard} onAnimationStart={checkHover} className='heroCard'>
          <HeroCard />
        </div>
        <div style={{height: '300px', backgroundColor: '#fff', position: 'relative'}}>
        </div>
      </div>
    </>
  );
}

export default App;
