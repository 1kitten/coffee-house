import './App.scss';
import { useState, useEffect,  } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Story } from './components/Story/Story'
import { Services } from './components/Services/Services';
import { HeroCard } from './components/HeroCard/HeroCard';
import { Footer } from './components/Footer/Footer';
import { Offer } from './components/Offer/Offer';

const BASE_URL = "http://127.0.0.1:8000/"

function App() {
  const vh = window.innerHeight / 100;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

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
        <Header />
        <Hero />
        <Story />
        <Services />
        <Offer />
        <HeroCard scroll={scroll}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
