import './App.scss';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Hero } from './components/Hero/Hero'

import { HeroPage } from './components/HeroPage/HeroPage';
import { ServicesPage } from './components/ServicesPage/ServicesPage'
import { Layout } from './components/Layout/Layout';

const BASE_URL = "http://127.0.0.1:8000/"

function App() {
  const [goodbye, setGoodbye] = useState()

  const fetchGoodbye = async () => {
    const url = BASE_URL
    const res = await fetch(url)
    const user = await res.json()
    setGoodbye(user)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HeroPage />}/>
          <Route path={'/menu'} element={<Hero />} />
          <Route path={'/services'} element={<ServicesPage />} />
        </Route>
      </Routes>
   </>
  );
}

export default App;
