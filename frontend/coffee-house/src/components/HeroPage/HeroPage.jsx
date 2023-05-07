import styles from './HeroPage.module.scss';
import { useState } from 'react'

import { Hero } from '../Hero/Hero'
import { Story } from '../Story/Story'
import { Services } from '../Services/Services';

import { Offer } from '../Offer/Offer';
import { Reserve } from '../Reserve/Reserve';
import { Recomended } from '../Recomended/Recomended';
import { Blog } from '../Blog/Blog';
import { HeroCard } from '../HeroCard/HeroCard';

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
    <Blog></Blog>
    <HeroCard scroll={scroll}/>
  </div>
  )
}