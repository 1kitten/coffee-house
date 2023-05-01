import styles from './HeroPage.module.scss';
import { useState, memo } from 'react'

import { Header } from '../Header/Header'
import { Hero } from '../Hero/Hero'
import { Story } from '../Story/Story'
import { Services } from '../Services/Services';
import { HeroCard } from '../HeroCard/HeroCard';
import { Footer } from '../Footer/Footer';
import { Offer } from '../Offer/Offer';
import { Reserve } from '../Reserve/Reserve';
import { Recomended } from '../Recomended/Recomended';

export const HeroPage = ({ }) => {

  const [scroll, setScroll] = useState(window.pageYOffset)

  const check = () => {
    setScroll(window.pageYOffset)
  }

  return (
  <div onWheel={check} className={styles.heroPage}>
    <Hero />
    <Story />
    <Services />
    <Offer />
    <Reserve />
    <Recomended />
    <HeroCard scroll={scroll}/>
  </div>
  )
}