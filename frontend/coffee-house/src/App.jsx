import './App.scss';
import { useState, useEffect, Suspense } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Story } from './components/Story/Story'
import { Services } from './components/Services/Services';
import { HeroCard } from './components/HeroCard/HeroCard';
import { Footer } from './components/Footer/Footer';
import { Offer } from './components/Offer/Offer';
import { Reserve } from './components/Reserve/Reserve';


const BASE_URL = "http://127.0.0.1:8000/"

function App() {
  const [goodbye, setGoodbye] = useState()
  const [scroll, setScroll] = useState(window.pageYOffset)

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
        <Reserve />
        <HeroCard scroll={scroll}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
